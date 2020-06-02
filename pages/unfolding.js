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
    unstable_revalidate: 1,
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
          Unfolding is the guise of my current work in music and sound art. With
          a focus on texture, space, weight and structure, I seek to create
          compositions which emphasise the contemplation of sensory experience.
        </Text>
        <Text>
          For releases from previous projects, see{' '}
          <a href='/discography'>my&nbsp;discography</a>.
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
