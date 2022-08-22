const associations = require('../associations')

const verify = (req, res, next) => {
    const { slug } = req.params
    const association = associations.find(associations => associations.slug === slug)
    const associationIndex = associations.findIndex(associations => associations.slug === slug)
  
    if (!association) {
      res.status(404).json('association not found')
    } else {
      req.association = association
      req.associationIndex = associationIndex
      next()
    }
  }
  
  
  
  module.exports = {
    verify
  }