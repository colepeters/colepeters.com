/* eslint-disable react/prop-types */
import { Container, Header } from '../components'
import Gallery from '../components/Gallery'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'

export async function getStaticProps() {
  const client = createCmsClient()
  const gallery = await client.getEntry('5P5RMIIryXRv0WJwNIFggN')

  return {
    props: {
      gallery,
    },
    revalidate: 1,
  }
}

export default function Blackwhite({ gallery }) {
  return (
    <>
      {setTitle('Blackwhite')}
      <Header />
      <Container as='section'>
        <Gallery {...gallery.fields} />
      </Container>
    </>
  )
}
