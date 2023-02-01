import connectDB from '@/utils/connectDB'
import Post from '@/models/Post'

export default async (req, res) => {
  try {
    await connectDB()

    const posts = await Post.find()

    res.status(200).json(posts)
  } catch (error) {
    console.error(error)
    // res.status(500).json({ error: 'Something went wrong.' })
  }
}
