import Link from 'next/link'
import { serverURL } from '@/utils/serverURL'

export default function Home({ posts }) {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {/* NOTE: Pass the post id to the url query string  */}
          <Link className='link' href={`/posts/${post._id}`}>
            Read more
          </Link>
        </div>
      ))}
    </>
  )
}

// * get the posts from the api
export async function getServerSideProps() {
  const res = await fetch(`${serverURL}/api/posts`)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
