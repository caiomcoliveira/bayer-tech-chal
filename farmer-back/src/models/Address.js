const {
    Model,
    DataTypes
} = require("sequelize");

const sequelize = require("../config/dbConfig");

class Address extends Model { }

Address.init({
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'address'
});


module.exports = Address;