const express = require("express")
const questionsRoutes = require("./routes/index.routes")
const app = express()
const bodyParser = require('body-parser')
const connection = require('../src/Databases/database')
const Ask = require('../src/Databases/Ask')

//Todos os Imports
connection
  .authenticate()
  .then(()=>{
    console.log("O Banco de dados já está rodando")
  })
  .catch((error)=>{
    console.log("Houve algum erro no Banco de dados" + `${error}`)
  })

//Conexão com o Banco de Dados

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.use("/questions", questionsRoutes)

//Inicialização do meu Server
app.listen(2352, ()=>{

  console.log("O Server já está rodando --- 🤑😎🤐")
})
