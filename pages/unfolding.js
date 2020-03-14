import { Container, Header, Heading, Text } from '../components'

export default function Unfolding() {
  return (
    <>
      <Header />
      <Container as='section'>
        <Heading fontWeight='300' mb={[4, null, 5]}>
          Unfolding
        </Heading>
        <Text>
          Unfolding is a project exploring interpretations of the physical world
          through the medium of sound. The work is informed by a diverse range
          of inputs, from classical and quantum physics to the sheer physicality
          of auditory stimuli.
        </Text>
      </Container>
    </>
  )
}
