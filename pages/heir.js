import Gallery from '../components/gallery/Gallery'
import setTitle from '../utils/setTitle'
import { Client } from '../prismic-configuration'
import { Container, Box, Header, Heading, RichText, Text } from '../components'

export async function getStaticProps() {
  const { data: gallery } = await Client().getByUID('gallery', 'heir')
  return {
    props: {
      gallery,
    },
  }
}

export default function Heir({ gallery }) {
  return (
    <>
      {setTitle('Heir')}
      <Header />
      <Container as='section'>
        <Gallery gallery={gallery} />
      </Container>
    </>
  )
}
