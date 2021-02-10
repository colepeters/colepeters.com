/* eslint-disable react/prop-types */
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
    revalidate: 1,
  }
}

export default function Unfolding({ releases }) {
  return (
    <>
      {setTitle('Sound')}
      <Header />
      <Container as='section'>
        <Heading mb={[4, 5]} position='relative' left={[0, null, '-4px']}>
          Sound
        </Heading>
        <Text>
          My current work in music and sound art is built on the processes
          of musique concrète, field recording, and reductive electronics.
        </Text>
        <Text>
          As with my visual art, my interests lie heavily in exploring
          the fundamental properties of the medium — in this case, texture,
          pressure, and time — while also investigating the capacity for
          sound to modulate our sensory experience of the physical&nbsp;world.
        </Text>
        <Text>
          My current and upcoming work is highlighted below.
          For releases from previous projects, see{' '}
          <a href='/discography'>my&nbsp;discography</a>.
        </Text>

        <Box mt={[4, 5, 6]} as='section'>
          {releases.map((release, index) => (
            <Release release={release} index={index} key={release.title} />
          ))}
        </Box>
      </Container>
    </>
  )
}
