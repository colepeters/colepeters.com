/* eslint-disable react/prop-types */
import Release from '../components/Release'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'
import { Container, Header } from '../components'

export async function getStaticProps() {
  const client = createCmsClient()
  const release = await client.getEntry('2GITe2Yrzl0SLra85hHiGD')

  return {
    props: {
      release,
    },
    revalidate: 1,
  }
}

export default function PresqueTout({ release }) {
  return (
    <>
      {setTitle('London (UK), 07/06/2014, evening')}
      <Header />
      <Container as='section'>
        <Release release={release.fields} />
      </Container>
    </>
  )
}
