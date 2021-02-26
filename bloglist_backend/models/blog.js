const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

// Duplicate the ID field.
blogSchema.virtual('id').get(function(){
  return this._id.toHexString()
})

// Ensure virtual fields are serialised.

blogSchema.set('toObject', {
  virtuals: true
})

blogSchema.set('toJSON', {
  virtuals: true
})

blogSchema.set('toBject', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)