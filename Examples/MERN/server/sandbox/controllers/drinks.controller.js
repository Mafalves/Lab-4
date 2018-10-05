const drinks = require('express').Router();
const drinkService = require('../service/drink.service');

//Get my data from client
// req.query;
// req.params;
// req.body; //POST
// req.cookies; 

//GET All
drinks.get('/', async (req, res) => {
    try {
        const drinks = await drinkService.all();
        return res.status(200).send({ success: true, list: drinks });
    } catch (error) {
        return res.status(500).send({ success: false, error });
    }

});

//Get by Id
drinks.get('/:id', async (req, res) => {

    const { id } = req.params;
    try {
        const drink = await drinkService.getById(id);
        return res.send({success: true, drink});
    } catch (error) {
        return res.send({success: false, error});
        
    }
});


//Create new
drinks.post('/', async (req, res) => {

    const drink = await drinkService.create(req.body);

    res.send(drink);
});

//Edit by Id
drinks.put('/:id', async (req, res) => {
    const drink = await drinkService.update(req.params.id, req.body);

    if(drink.ok){
        return res.redirect(`/drinks/${req.params.id}`);
    }
    return res.send({success: false, error: 'FAILED'});
});

//Delete by Id
drinks.delete('/:id', async (req, res) => {
    const deleted = await drinkService.delete(req.params.id);

    if(deleted.ok){
        return res.send({success: true, message: `The drink with id ${req.params.id} was deleted`});
    }
    return res.send({success: false, message: `Could not delete item with id ${req.params.id}`});
});


module.exports = drinks;
