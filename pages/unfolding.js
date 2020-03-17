import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'

import Release from '../components/releases/Release'
import { Client } from '../prismic-configuration'
import { Container, Box, Header, Heading, List, Text } from '../components'

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
        <Heading mb={[4, 5]}>Unfolding</Heading>
        <Text>
          Unfolding is a project exploring interpretations of the physical world
          through the medium of sound. The work is informed by a diverse range
          of inputs, from classical and quantum physics to the sheer physicality
          of auditory stimuli.
        </Text>

        <Box mt={[4, 5]} as='section'>
          {releases.map(release => (
            <Release
              release={release}
              key={RichText.asText(release.data.title)}
            />
          ))}
        </Box>
      </Container>
    </>
  )
}
