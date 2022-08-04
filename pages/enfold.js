/* eslint-disable react/prop-types */
import { Container, Header } from '../components'
import Release from '../components/Release'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'

export async function getStaticProps() {
  const client = createCmsClient()
  const release = await client.getEntry('77hjRfi0icTbuAPzxToAcH')

  return {
    props: {
      release,
    },
    revalidate: 1,
  }
}

export default function Enfold({ release }) {
  return (
    <>
      {setTitle('Enfold: Rehearsal for Send + Receive, 2021')}
      <Header />
      <Container as='section'>
        <Release release={release.fields} />
      </Container>
    </>
  )
}
