const {
    Model,
    DataTypes
} = require("sequelize");

const sequelize = require("../config/dbConfig");

class Document extends Model {}

Document.init({
    documentNumber: {
        type: DataTypes.STRING
    },
    documentType: {
        type: DataTypes.STRING
    },        
}, {
    sequelize,
    modelName: 'document'
});


module.exports = Document;