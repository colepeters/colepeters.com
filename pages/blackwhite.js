import Gallery from '../components/Gallery'
import setTitle from '../utils/setTitle'
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
      {setTitle('Blackwhite')}
      <Header />
      <Container as='section'>
        <Gallery gallery={gallery} />
      </Container>
    </>
  )
}
