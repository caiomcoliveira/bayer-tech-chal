
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Address = require("./Address");
const Document = require("./Document");

class Farmer extends Model {}

Farmer.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Farmer'
});

Farmer.hasOne(Address);
Farmer.hasOne(Document);

module.exports = Farmer;