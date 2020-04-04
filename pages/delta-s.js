import Gallery from '../components/Gallery'
import setTitle from '../utils/setTitle'
import { Client } from '../prismic-configuration'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const { data: gallery } = await Client().getByUID('gallery', 'delta-s')
  return {
    props: {
      gallery,
    },
  }
}

export default function DeltaS({ gallery }) {
  return (
    <>
      {setTitle('∆S')}
      <Header />
      <Container as='section'>
        <Gallery gallery={gallery} />
      </Container>
    </>
  )
}
