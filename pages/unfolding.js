import Link from 'next/Link'

import { Container, Header, Heading, Text } from '../components'

export default function Unfolding() {
  return (
    <>
      <Header />
      <Container as='section'>
        <Heading
          as='h2'
          fontWeight='400'
          fontSize={5}
          letterSpacing='0.05em'
          style={{ textTransform: 'uppercase' }}
        >
          Unfolding
        </Heading>
        <Text>
          As a sound artist, I work within the vein of musique concrète, noise,
          drone, and other non-traditional and experimental forms of expression.
          The physicality and experiential effects of sound, and the
          interpretation of the broader physical world through this medium, are
          the primary fascinations I explore with my project{' '}
          <Link href='/unfolding'>
            <a>Unfolding</a>
          </Link>
          .
        </Text>
      </Container>
    </>
  )
}
