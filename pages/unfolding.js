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
          Unfolding is a project exploring interpretations of the physical world
          through the medium of sound, drawing on aspects of experimental music,
          brutalist aesthetics and the physical sciences.
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
