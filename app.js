const express = require('express');
const { connect } = require('./framework/connexion.js');

const app = express();

const database = async () => {
    await connect();
}

database();

app.use('/', () =>{
    console.log('This is a test');
})

module.exports = app;