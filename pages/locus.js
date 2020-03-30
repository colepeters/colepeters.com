import Presentation from '../components/Presentation'
import setTitle from '../utils/setTitle'
import { Client } from '../prismic-configuration'
import { Container, Box, Header, Heading, RichText, Text } from '../components'

export async function getStaticProps() {
  const { data: presentation } = await Client().getByUID(
    'presentation',
    'locus'
  )
  return {
    props: {
      presentation,
    },
  }
}

export default function Locus({ presentation }) {
  return (
    <>
      {setTitle('Locus')}
      <Header />
      <Container as='section'>
        <Presentation presentation={presentation} />
      </Container>
    </>
  )
}
