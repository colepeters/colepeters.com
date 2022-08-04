/* eslint-disable react/prop-types */
import { Container, Header } from '../components'
import Release from '../components/Release'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'

export async function getStaticProps() {
  const client = createCmsClient()
  const release = await client.getEntry('2f9CYXpotu42N1LRPF5FU1')

  return {
    props: {
      release,
    },
    revalidate: 1,
  }
}

export default function APatternOfExtraction({ release }) {
  return (
    <>
      {setTitle('A Pattern of Extraction')}
      <Header />
      <Container as='section'>
        <Release release={release.fields} />
      </Container>
    </>
  )
}
