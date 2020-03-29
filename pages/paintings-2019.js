import Gallery from '../components/gallery/Gallery'
import { Client } from '../prismic-configuration'
import { Container, Box, Header, Heading, RichText, Text } from '../components'

export async function getStaticProps() {
  const { data: gallery } = await Client().getByUID('gallery', 'paintings-2019')
  return {
    props: {
      gallery,
    },
  }
}

export default function Paintings2019({ gallery }) {
  return (
    <>
      <Header />
      <Container as='section'>
        <Gallery gallery={gallery} />
      </Container>
    </>
  )
}
