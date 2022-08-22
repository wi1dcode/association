const express = require('express')
const app = express()
const associations = require('../associations')
const { verify } = require('../middlewares/verify')


app.get('/', (req, res) => {
    res.json(associations)
  
})


app.get('/:slug', verify, (req, res) => {
    res.json(req.association)
})

module.exports = app
