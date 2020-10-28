/* eslint-disable react/prop-types */
import ReactMarkdown from '../components/ReactMarkdown'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'
import { Container, Header, Heading } from '../components'

export async function getStaticProps() {
  const client = createCmsClient()
  const biography = await client.getEntry('41HrnTIwLtFLz0884kZZQI')

  return {
    props: {
      biography,
    },
    revalidate: 1,
  }
}

export default function Biography({ biography }) {
  return (
    <>
      {setTitle('Biography')}
      <Header />
      <Container as='section'>
        <Heading mb={[4, 5]} position='relative' left={[0, null, '-4px']}>
          Biography
        </Heading>
        <ReactMarkdown source={biography.fields.content} />
      </Container>
    </>
  )
}
