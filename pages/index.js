import { Container, Header, Heading, Text } from '../components'

export default function Index() {
  return (
    <>
      <Header />
      <Container as='section'>
        <Heading as='h2' fontWeight='500'>
          SOUND
        </Heading>
        <Text>
          Something about sound goes here. Some descriptive text et cetera. Wow.
          I wonder how long it will take for this line to wrap.
        </Text>
        <Text>
          Perhaps an additional paragraph will go here and talk some more about
          sound. You never know. Crazy shit can happen on the World Wide Web.
        </Text>
      </Container>
    </>
  )
}
