import Head from 'next/head'
import Link from 'next/link'

export default function PostDetail({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Link className='link' href='/'>
        Go Home
      </Link>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </>
  )
}

// Get Post Detail with getServerSideProps
export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}
