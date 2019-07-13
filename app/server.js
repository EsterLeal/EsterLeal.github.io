const mongoose = require('mongoose')
const MONGO_URL = 'mongodb+srv://admin:senha@cluster0-soclr.mongodb.net/test?retryWrites=true&w=majority'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controllerContato = require('./contato/contatoController')
const controllerLogin = require('./login/loginController')
const controllerCadastro = require('./cadastro/cadastroController')
const controllerAtividades = require('./cadastrarAtividades/atividadesController')
const jwt = require('jsonwebtoken')
const port = 3000

const app = express()
app.use(cors())
app.use(bodyParser.json())


mongoose.connect(MONGO_URL,
  { useNewUrlParser: true },
  error => {

    if (error) {
      console.log("Deu ERRO", error)
    } else {
      console.log("TA RODANDO, BRASILLLL")
    }
  }
)

// CONTATO ROTAS

app.post('/contato', (request, response) => {
  controllerContato.add(request.body)
    .then(formContato => {
      const _id = formContato._id
      response.send(_id)
    })

    .catch(error => {
      if (error.name === "ValidationError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

app.delete('/contato/:id', (request, response) => {
  controllerContato.remove(request.params.id)
    .then(formContato => {
      if (formContato === null || formContato === undefined) {
        response.sendStatus(404)
      } else {
        response.sendStatus(204)
      }
    })
    .catch(error => {
      if (error.name === "CastError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

// CADASTRO ROTAS

// app.post('/cadastro', (request, response) => {
//   controllerCadastro.add(request.body)
//     .then(cadastrar => response.send(cadastrar))
// })

app.post('/cadastro', (request, response) => {
  controllerCadastro.add(request.body)
    .then(cadastrar => {
      const _id = cadastrar._id
      response.send(_id)
    })

    .catch(error => {
      if (error.name === "ValidationError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

app.delete('/cadastro/:id', (request, response) => {
  controllerCadastro.remove(request.params.id)
    .then(cadastrar => {
      if (cadastrar === null || cadastrar === undefined) {
        response.sendStatus(404)
      } else {
        response.sendStatus(204)
      }
    })
    .catch(error => {
      if (error.name === "CastError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

// LOGIN ROTAS

// app.post('/login', (request, response) => {
//   controllerLogin.add()
//     .then(envioLogin => response.send(envioLogin))
// })

app.post('/login', (request, response) => {
  controllerLogin.add(request.body)
    .then(envioLogin => {
      const _id = envioLogin._id
      response.send(_id)
    })

    .catch(error => {
      if (error.name === "ValidationError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

app.delete('/login/:id', (request, response) => {
  controllerLogin.remove(request.params.id)
    .then(envioLogin => {
      if (envioLogin === null || envioLogin === undefined) {
        response.sendStatus(404)
      } else {
        response.sendStatus(204)
      }
    })
    .catch(error => {
      if (error.name === "CastError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

// CADASTRAR ATIVIDADES ROTAS

app.post('/atividade', (request, response) => {
  controllerAtividades.add(request.body)
    .then(cadastrarAtividade => {
      const _id = cadastrarAtividade._id
      response.send(_id)
    })

    .catch(error => {
      if (error.name === "ValidationError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

app.delete('/atividade/:id', (request, response) => {
  controllerAtividades.remove(request.params.id)
    .then(cadastrarAtividade => {
      if (cadastrarAtividade === null || cadastrarAtividade === undefined) {
        response.sendStatus(404)
      } else {
        response.sendStatus(204)
      }
    })
    .catch(error => {
      if (error.name === "CastError") {
        response.sendStatus(400)
      } else {
        response.sendStatus(500)
      }
    })
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})