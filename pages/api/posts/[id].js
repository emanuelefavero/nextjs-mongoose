import connectDB from '@/utils/connectDB'
import Post from '@/models/Post'

export default async (req, res) => {
  try {
    await connectDB()

    const { id } = req.query

    const post = await Post.findById(id)

    res.status(200).json(post)
  } catch (error) {
    console.error(error)
    // res.status(500).json({ error: 'Something went wrong.' })
  }
}
