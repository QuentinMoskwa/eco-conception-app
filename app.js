const express = require('express');
const { connect } = require('./framework/connexion.js');
const {sync} = require('./framework/sync.js');
const productRouter = require('./route/product.route.js');

const app = express();

const database = async () => {
    await connect();
    await sync();
}

database();
app.use(express.json());
app.use('/product', productRouter);

module.exports = app;