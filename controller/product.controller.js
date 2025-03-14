const Product = require('../model/product.model.js');

exports.create = async (req, res, next) => {
    let product = await Product.create(req.body.product);
    res.status(201).json(product);
};

exports.getById = async (req,res,next) => {
    let id = req.params.id;
    let product = await Product.findByPk(id);
    res.status(200).json(product);
}