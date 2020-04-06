import Presentation from '../components/Presentation'
import setTitle from '../utils/setTitle'
import { Client } from '../prismic-configuration'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const { data: presentation } = await Client().getByUID(
    'presentation',
    'protest'
  )
  return {
    props: {
      presentation,
    },
  }
}

export default function Protest({ presentation }) {
  return (
    <>
      {setTitle('Protest')}
      <Header />
      <Container as='section'>
        <Presentation presentation={presentation} />
      </Container>
    </>
  )
}
