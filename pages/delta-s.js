import Gallery from '../components/Gallery'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const client = createCmsClient()
  const gallery = await client.getEntry('RhrBWcTY5uCxC6dH5Rcr1')

  return {
    props: {
      gallery,
    },
    revalidate: 1,
  }
}

export default function DeltaS({ gallery }) {
  return (
    <>
      {setTitle('∆S')}
      <Header />
      <Container as='section'>
        <Gallery {...gallery.fields} />
      </Container>
    </>
  )
}
