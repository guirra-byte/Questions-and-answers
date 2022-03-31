const Sequelize = require("sequelize")
const connection = require("./database")


const Ask = connection.define('pergunta', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

Ask.sync({ force: false }).then(()=>{
  console.log("A tabela já foi criada")
})

module.exports = Ask