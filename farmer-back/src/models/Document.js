const {
    Model,
    DataTypes
} = require("sequelize");

const sequelize = require("../config/dbConfig");

class Document extends Model {}

Document.init({
    documentNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documentType: {
        type: DataTypes.STRING,
        allowNull: false
    },        
}, {
    sequelize,
    modelName: 'document'
});


module.exports = Document;