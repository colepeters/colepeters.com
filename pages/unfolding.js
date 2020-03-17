import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import { Client } from '../prismic-configuration'
import { Container, Box, Header, Heading, Text } from '../components'

export async function getStaticProps() {
  const { results: releases } = await Client().query(
    Prismic.Predicates.at('document.type', 'release')
  )
  return {
    props: {
      releases,
    },
  }
}

export default function Unfolding({ releases }) {
  console.log(releases)
  return (
    <>
      <Header />
      <Container as='section'>
        <Heading mb={[4, null, 5]}>Unfolding</Heading>
        <Text>
          Unfolding is a project exploring interpretations of the physical world
          through the medium of sound. The work is informed by a diverse range
          of inputs, from classical and quantum physics to the sheer physicality
          of auditory stimuli.
        </Text>

        <Box mt={[4, null, 5]} as='section'>
          <Heading as='h2' mb={[3, null, 4]}>
            Releases
          </Heading>
          {releases.map(release => (
            <Box
              as='article'
              display='flex'
              key={RichText.asText(release.data.title)}
            >
              <Box width='50%'>
                <Heading as='h3'>{RichText.asText(release.data.title)}</Heading>
              </Box>
              <Box width='50%'>
                <img src={release.data.cover.url} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  )
}
