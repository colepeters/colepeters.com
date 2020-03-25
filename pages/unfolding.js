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
  return (
    <>
      <Header />
      <Container as='section'>
        <Heading mb={[4, 5]}>Unfolding</Heading>
        <Text>
          Unfolding is a project exploring interpretations and examinations of
          the physical world through the medium of sound. As an extension of my
          artistic work as a whole, it seeks to draw parallels between the
          fields of science and art, with a particular focus on physicality and
          the nature of perception.
        </Text>

        <Box mt={[4, 5, 6]} as='section'>
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
