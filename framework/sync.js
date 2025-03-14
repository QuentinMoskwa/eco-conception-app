const {bdd} = require('./connexion.js');
const Product = require('../model/product.model.js');
const Category = require('../model/category.model.js');

const sync = async () => {
    Product.belongsTo(Category);
    Category.belongsTo(Category,{ foreignKey : 'parentId'});
    await bdd.sync({force : true});
}

module.exports = {sync};