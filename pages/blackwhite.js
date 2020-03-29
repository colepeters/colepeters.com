import Gallery from '../components/gallery/Gallery'
import { Client } from '../prismic-configuration'
import { Container, Box, Header, Heading, RichText, Text } from '../components'

export async function getStaticProps() {
  const { data: gallery } = await Client().getByUID('gallery', 'blackwhite')
  return {
    props: {
      gallery,
    },
  }
}

export default function Blackwhite({ gallery }) {
  return (
    <>
      <Header />
      <Container as='section'>
        <Gallery gallery={gallery} />
      </Container>
    </>
  )
}
