const express = require('express');
const productController= require('../controller/product.controller.js');

const router = express.Router();

router.get('/', () => {
    res.send('This is a test');
});

router.get('/:id',productController.getById);

router.post('/', productController.create);

router.put('/:id', () => {});

router.delete('/:id', () => {});

module.exports = router;