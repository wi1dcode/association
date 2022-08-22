const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 5000
const cors = require('cors')
const associations = require('./routes/associations')


app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use('/associations', associations)


app.listen(port, () => {
    console.log(`Server running on ${port}`)
  })
  
