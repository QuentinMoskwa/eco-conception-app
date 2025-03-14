const {Datatypes, Model} = require('sequelize');
const {bdd} = require('../framework/connexion.js');

const Product = bdd.define("product", {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(7, 2),
        allowNull: false,
    },
    stock: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        defaultValue: 0,
    },
    reference: {
        type: DataTypes.STRING(12),
    },
    description: {
        type: DataTypes.TEXT,
    },
    picture: {
        type: DataTypes.STRING(2083),
        allowNull: false,
    },
});