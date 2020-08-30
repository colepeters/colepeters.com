import Presentation from '../components/Presentation'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const client = createCmsClient()
  const presentation = await client.getEntry('6YEhoMbMwqURFyWJ74Uh0D')
  return {
    props: {
      presentation,
    },
    revalidate: 1,
  }
}

export default function Locus({ presentation }) {
  return (
    <>
      {setTitle('Locus')}
      <Header />
      <Container as='section'>
        <Presentation {...presentation.fields} />
      </Container>
    </>
  )
}
