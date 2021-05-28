const {
    Model,
    DataTypes
} = require("sequelize");

const sequelize = require("../config/dbConfig");

class Address extends Model {}

Address.init({
    state: {
        type: DataTypes.STRING
    },
    street: {
        type: DataTypes.STRING
    },    
    address: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
    },    
}, {
    sequelize,
    modelName: 'address'
});


module.exports = Address;