const express = require('express')
const app = express()
const messages = require('../messages')

app.get('/', (req, res) => {
    res.json(messages)
})



module.exports = app
