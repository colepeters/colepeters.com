import Head from 'next/head'

export default function setTitle(title) {
  return (
    <Head>
      <title>Cole Peters{title && ` | ${title}`}</title>
    </Head>
  )
}
