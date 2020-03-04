import Link from 'next/Link'

import { Container, Header, Heading, Text } from '../components'

export default function Sound() {
  return (
    <>
      <Header />
      <Container as='section'>
        <Heading as='h2' fontWeight='500'>
          Sound
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
        <Text>
          My{' '}
          <Link href='/discography'>
            <a>previous work</a>
          </Link>{' '}
          includes eponymous releases, as well as the harsh noise project
          Gomeisa, the dark ambient project Secret Girls, and my collaboration
          with Andreas Brandal as Museums of Sleep. I was also the co-founder
          and art director of{' '}
          <Link href='https://www.discogs.com/label/181172-Prairie-Fire'>
            <a>Prairie Fire Tapes</a>
          </Link>
          .
        </Text>
      </Container>
    </>
  )
}
