const express = require('express');
const productController= require('../controller/product.controller.js');

const router = express.Router();

router.get('/', () => {
    res.send('This is a test');
});

router.get('/:id', () => {
    res.send('This is a test of :' + id);
});

router.post('/', () => {});

router.put('/:id', () => {});

router.delete('/:id', () => {});

module.exports = router;