const express = require('express');
const { connect } = require('./framework/connexion.js');
const {sync} = require('./framework/sync.js');

const app = express();

const database = async () => {
    await connect();
    await sync();
}

database();

app.use('/', () =>{
    console.log('This is a test');
})

module.exports = app;