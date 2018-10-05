const Router = require('express').Router();
const CategoryService = require('../service/category.service');

Router.get('/', async (req, res) => {
    const categories = await CategoryService.all();

    return res.send({success: true, list: categories});
});

Router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const category = await CategoryService.getById(id);
    if(category){
        return res.send({success: true, category});
    }
    return res.status(404).send({success: false, error: 'Category not found'});
});


Router.post('/', async (req, res) => {
    try {
        const category = CategoryService.create(req.body);
        return res.send({success: true, category});
    } catch (error) {
        return res.send({success: false, error});
    }
});

Router.put('/:id', (req, res) => {

});

Router.delete('/:id', (req, res) => {

});

module.exports = Router;