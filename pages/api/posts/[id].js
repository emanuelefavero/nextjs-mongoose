import connectDB from '@/utils/connectDB'
import Post from '@/models/Post'

export default async (req, res) => {
  try {
    await connectDB()

    // * get the id from the url query thanks to the [id] in the file name
    const { id } = req.query

    // * get the post from mongoDB
    const post = await Post.findById(id)

    // * send the post to the client as an API response
    res.status(200).json(post)
  } catch (error) {
    console.error(error)
    // res.status(500).json({ error: 'Something went wrong.' })
  }
}
