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
    },
    reference: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    picture: {
        type: DataTypes.STRING(2083),
        allowNull: false,
    },
});