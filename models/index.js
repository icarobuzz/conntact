const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize('conntato', 'root', 'conntatodevs', {
  host: "localhost",
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const db ={};

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
  const model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if('associate' in db[modelName]){
    db[modelName].associate(db);
  }
  module.exports[modelName] = db[modelName];
});


exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
