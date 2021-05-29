const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.NODE_ENV == 'test' ? './testdb.sqlite' : './mockdb.sqlite'
});


module.exports = sequelize;