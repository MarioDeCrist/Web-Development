const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const port = 8080

server = express()
server.set('view engine', 'ejs')
server.use(logger('dev'))
server.use(bodyParser.urlencoded({extended: true}))

server.get('/forms/', (req, res) => {
  res.render('form_response')
})

server.post('/forms/', (req, res) => {
  const template_vars = {
    name: req.body['firstname'],
    lastname: req.body['lastname'],
    email: req.body['email'],
    phonenumber: req.body['phonenumber'],
  }
  res.render('form_response', template_vars)
})

server.use(express.static('static'))
server.listen(port)
