import Presentation from '../components/Presentation'
import setTitle from '../utils/setTitle'
import { Client } from '../prismic-configuration'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const { data: presentation } = await Client().getByUID(
    'presentation',
    'images-pour-rien'
  )
  return {
    props: {
      presentation,
    },
  }
}

export default function ImagesPourRien({ presentation }) {
  return (
    <>
      {setTitle('Images Pour Rien')}
      <Header />
      <Container as='section'>
        <Presentation presentation={presentation} />
      </Container>
    </>
  )
}
