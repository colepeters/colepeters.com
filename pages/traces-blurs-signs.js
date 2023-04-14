/* eslint-disable react/prop-types */
import { Container, Header } from '../components'
import Release from '../components/Release'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'

export async function getStaticProps() {
  const client = createCmsClient()
  const release = await client.getEntry('6n4uKQH712wGAgKtOKyqCU')

  return {
    props: {
      release,
    },
    revalidate: 1,
  }
}

export default function TracesBlursSigns({ release }) {
  return (
    <>
      {setTitle('Traces Blurs Signs')}
      <Header />
      <Container as='section'>
        <Release release={release.fields} />
      </Container>
    </>
  )
}
