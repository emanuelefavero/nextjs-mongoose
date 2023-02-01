import Head from 'next/head'
import Link from 'next/link'
import serverURL from '@/utils/serverURL'

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

// * get the id from the url query thanks to the [id] in the file name
export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${serverURL}/api/posts/${id}`)
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}
