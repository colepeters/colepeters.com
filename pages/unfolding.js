import Release from '../components/Release'
import createCmsClient from '../services/createCmsClient'
import setTitle from '../utils/setTitle'
import { Container, Box, Header, Heading, Text } from '../components'

export async function getStaticProps() {
  const client = createCmsClient()

  const { items } = await client.getEntries({
    content_type: 'release',
  })

  const releases = items.map(({ fields }) => fields)

  return {
    props: {
      releases,
    },
  }
}

export default function Unfolding({ releases }) {
  return (
    <>
      {setTitle('Unfolding')}
      <Header />
      <Container as='section'>
        <Heading mb={[4, 5]} position='relative' left={[0, null, '-4px']}>
          Unfolding
        </Heading>
        <Text>
          Unfolding is a project exploring interpretations and examinations of
          the physical world through the medium of sound. As an extension of my
          artistic work as a whole, it draws parallels between the fields of
          science and art, with a focus on physicality and the nature of
          perception.
        </Text>

        <Box mt={[4, 5, 6]} as='section'>
          {releases.map(release => (
            <Release release={release} key={release.title} />
          ))}
        </Box>
      </Container>
    </>
  )
}
