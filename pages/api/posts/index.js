import connectDB from '@/utils/connectDB'
import Post from '@/models/Post'

export default async (req, res) => {
  try {
    await connectDB()

    // * get the posts from mongoDB
    const posts = await Post.find()

    // * send the posts to the client as an API response
    res.status(200).json(posts)
  } catch (error) {
    console.error(error)
    // res.status(500).json({ error: 'Something went wrong.' })
  }
}
