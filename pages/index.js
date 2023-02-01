import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link className='link' href={`/posts/${post._id}`}>
            Read more
          </Link>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
