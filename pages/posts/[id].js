import Head from 'next/head'

export default function PostDetail({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>Post Detail</h1>
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
