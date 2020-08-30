import Gallery from '../components/Gallery'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const client = createCmsClient()
  const gallery = await client.getEntry('65DY0fXXvExxkj29HEyJVV')

  return {
    props: {
      gallery,
    },
    revalidate: 1,
  }
}

export default function Heir({ gallery }) {
  return (
    <>
      {setTitle('Heir')}
      <Header />
      <Container as='section'>
        <Gallery {...gallery.fields} />
      </Container>
    </>
  )
}
