import Presentation from '../components/Presentation'
import setTitle from '../utils/setTitle'
import { Client } from '../prismic-configuration'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const { data: presentation } = await Client().getByUID(
    'presentation',
    'northern-italy'
  )
  return {
    props: {
      presentation,
    },
  }
}

export default function NorthernItaly({ presentation }) {
  return (
    <>
      {setTitle('Northern Italy')}
      <Header />
      <Container as='section'>
        <Presentation presentation={presentation} />
      </Container>
    </>
  )
}
