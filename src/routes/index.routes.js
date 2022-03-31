const { response } = require("express")
const Router = require("express")
const res = require("express/lib/response")
const questionsRoutes = Router()
const Ask = require('../Databases/Ask')
const Reply = require('../Databases/Response')


questionsRoutes.get('/ask', (request, response)=>{

  response.render("ask")
})

questionsRoutes.get('/', (request, response)=>{

  Ask.findAll({ raw: true, order: [['id', 'DESC']] }).then((perguntas)=>{
  
    //ASC = Crescente e DESC = Decrescente
    //A respeito da ordem de exibição

    response.render("home", {
      asks: perguntas
    })
  });
})

questionsRoutes.post('/save', (request, response)=>{

  const nameOfAsk = request.body.title
  const askDescription = request.body.description

  Ask.create({
    title: nameOfAsk,
    description: askDescription
  }).then(()=>{

    response.redirect('/questions')
  }).catch((error)=>{

    console.log(`${error}`)
  })

})

questionsRoutes.get('/ask/:id', (request, response)=>{

  const id = request.params.id

  Ask.findOne({

    where: { id: id }

  }).then((pergunta)=>{

    if(pergunta != undefined){

      Reply.findAll({ 
        where: { perguntaId: pergunta.id },
        order: [['id', 'DESC']]

       }).then((respostas)=>{

        response.render("AllAsks", {
          ask: pergunta,
          reply: respostas
        })

       })    
    }

    else{

      response.redirect('/questions')
    }
  })
})

questionsRoutes.post('/reply', (request, response)=>{

  const body = request.body.reply
  const askId = request.body.ask

  Reply.create({

    corpo: body,
    perguntaId: askId
    
  }).then(()=>{

    response.redirect("/questions/ask/" + askId )
  })
})



module.exports = questionsRoutes