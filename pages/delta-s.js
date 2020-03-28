import Gallery from '../components/gallery/Gallery'
import { Client } from '../prismic-configuration'
import { Container, Box, Header, Heading, RichText, Text } from '../components'

export async function getStaticProps() {
  const { data: gallery } = await Client().getByUID('gallery', 'delta-s')
  return {
    props: {
      gallery,
    },
  }
}

export default function Unfolding({ gallery }) {
  console.log(gallery)
  return (
    <>
      <Header />
      <Container as='section'>
        <Gallery gallery={gallery} />
      </Container>
    </>
  )
}
