const Sequelize = require('sequelize')

const connection = new Sequelize('UseSeuBancoDeDados', 'root', 'UseSuaSenha', {

  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection
