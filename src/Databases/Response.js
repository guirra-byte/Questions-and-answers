const Sequelize = require('sequelize')
const connection = require('./database')

const Reply = connection.define('repostas', {

  corpo : {
    type: Sequelize.TEXT,
    allowNull: false
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Reply.sync({ force: false }).then(()=>{
  console.log("A tabela de Respostas já foi criada")
})

module.exports = Reply