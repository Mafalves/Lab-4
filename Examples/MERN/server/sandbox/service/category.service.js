const Category = require('../models/category.model');

class CategoryService{
    async create({name, description}){
        
        try {
            const category = new Category({name, description});
            return await category.save();
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, {name, description}){
        try {
            return await Category.update({_id: id}, {$set: {name, description}});
        } catch (error) {
            
        }
    }

    async delete(id){
        try {
            return await Category.deleteOne({_id: id});
        } catch (error) {
            
        }
    }

    all(){
        return Category.find({});
    }

    getById(id){
        return Category.findById(id);
    }
}

module.exports = new CategoryService();