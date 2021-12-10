/* eslint-disable react/prop-types */
import Release from '../components/Release'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'
import { Container, Header } from '../components'

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
