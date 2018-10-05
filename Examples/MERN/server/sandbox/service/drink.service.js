const DrinkModel = require('../models/drinks.model');


class DrinkService {

    all() {

        return DrinkModel.find().populate('category', '-_id');
    }

    getById(id) {
        return DrinkModel.findById(id).populate('category');
    }

    async create({ name, size, price, category }) {
        try {
            const drink = new DrinkModel({ name, size, price, category });
            return await drink.save();
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, { name, price, size }) {
        return await DrinkModel.update({ _id: id }, { $set: { name, price, size } });
    }

    async delete(id) {
        return await DrinkModel.deleteOne({ _id: id });
    }

    getBySize(size) {
        return DrinkModel.findOne({ size: size });
    }

}

module.exports = new DrinkService();