const Sequelize = require('sequelize')

const connection = new Sequelize('draxask', 'root', 'V84816756', {

  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection