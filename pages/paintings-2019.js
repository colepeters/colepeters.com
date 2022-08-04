/* eslint-disable react/prop-types */
import { Container, Header } from '../components'
import Gallery from '../components/Gallery'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'

export async function getStaticProps() {
  const client = createCmsClient()
  const gallery = await client.getEntry('2tMlrpP10ShMI5CzmtbgVq')

  return {
    props: {
      gallery,
    },
    revalidate: 1,
  }
}

export default function Paintings2019({ gallery }) {
  return (
    <>
      {setTitle('Paintings 2019')}
      <Header />
      <Container as='section'>
        <Gallery {...gallery.fields} />
      </Container>
    </>
  )
}
