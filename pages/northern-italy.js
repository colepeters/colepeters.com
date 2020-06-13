import Presentation from '../components/Presentation'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const client = createCmsClient()
  const presentation = await client.getEntry('6UbfTnmXbIdcqsJQT3jdS7')
  return {
    props: {
      presentation,
    },
    unstable_revalidate: 1,
  }
}

export default function NorthernItaly({ presentation }) {
  return (
    <>
      {setTitle('Northern Italy')}
      <Header />
      <Container as='section'>
        <Presentation {...presentation.fields} />
      </Container>
    </>
  )
}
