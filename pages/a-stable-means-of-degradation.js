/* eslint-disable react/prop-types */
import Release from '../components/Release'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const client = createCmsClient()
  const release = await client.getEntry('4zXvdl5WzzzqgvvB4FkxCd')

  return {
    props: {
      release,
    },
    revalidate: 1,
  }
}

export default function AStableMeansOfDegradation({ release }) {
  return (
    <>
      {setTitle('A Stable Means of Degradation')}
      <Header />
      <Container as='section'>
        <Release release={release.fields} />
      </Container>
    </>
  )
}
