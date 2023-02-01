const mongoose = require('mongoose')
const Schema = mongoose.Schema

// ? prevent duplicate models (not active)
// delete mongoose.models.Post
// delete mongoose.modelSchemas.Post

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
})

// ? prevent duplicate models
module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema)
