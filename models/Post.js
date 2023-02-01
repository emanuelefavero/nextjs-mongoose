const mongoose = require('mongoose')
const Schema = mongoose.Schema

// delete mongoose.models.Post
// delete mongoose.modelSchemas.Post

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema)
