const express = require('express')
const app = express()
const messages = require('../messages')
const moment = require('moment')
const { checkIfAssociationExists } = require('../middlewares/verifyMessages')



app.get('/', (req, res) => {
    const sortedMessages = messages.sort((a, b) => {
      return moment(b.date).format('x') - moment(a.date).format('x')
    })
  
    res.json(sortedMessages)
  })
  
  app.post('/', checkIfAssociationExists, (req, res) => {
    const message = {
      object: req.body.object,
      content: req.body.content,
      association: req.body.association,
      date: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  
    messages.push(message)
    res.json(message)
  })
  

app.get('/messages', (req, res) => {
    res.json(messages)
  
  })

module.exports = app
