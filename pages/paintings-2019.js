import Gallery from '../components/Gallery'
import setTitle from '../utils/setTitle'
import { Client } from '../prismic-configuration'
import { Container, Header } from '../components'

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
      {setTitle('Paintings 2019')}
      <Header />
      <Container as='section'>
        <Gallery gallery={gallery} />
      </Container>
    </>
  )
}
