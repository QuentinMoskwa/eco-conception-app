const {bdd} = require('./connexion.js');
const Product = require('../model/product.model.js');

const sync = async () => {
    await bdd.sync({force : true});
}

module.exports = {sync};