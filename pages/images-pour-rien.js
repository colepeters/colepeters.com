/* eslint-disable react/prop-types */
import Presentation from '../components/Presentation'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const client = createCmsClient()
  const presentation = await client.getEntry('4mNdD52wWLYXHsskc0ZdGI')
  return {
    props: {
      presentation,
    },
    revalidate: 1,
  }
}

export default function ImagesPourRien({ presentation }) {
  return (
    <>
      {setTitle('Images Pour Rien')}
      <Header />
      <Container as='section'>
        <Presentation {...presentation.fields} />
      </Container>
    </>
  )
}
