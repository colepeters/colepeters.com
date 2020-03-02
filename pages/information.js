import Link from 'next/link'
import { Container, Header, Heading, Text } from '../components'

export default function Index() {
  return (
    <>
      <Header />
      <Container as='section'>
        <Heading as='h2' fontWeight='500'>
          Information
        </Heading>
        <Text>
          My work is an attempt to feed back upon the natural, scientific and
          cultural world around me. For the past several years, I have been
          specifically drawn to investigations of quantum and classical physics,
          the effects of entropy and decay in the physical world, and a general
          exploration of reductive aesthetics.
        </Text>
        <Text>
          Paint and sound are my primary mediums at the moment. In the past, my
          work has encompassed drawing, graffiti, graphic design, writing and
          photography.
        </Text>
        <Text>
          From 2010&ndash;2013, I was the co-founder and art director of{' '}
          <Link href='https://www.discogs.com/label/181172-Prairie-Fire'>
            <a>Prairie Fire Tapes</a>
          </Link>{' '}
          in addition to my own Stasis microlabel. In 2012, I co-founded the
          design studio{' '}
          <Link href='https://burdocks.ca'>
            <a>Burdocks</a>
          </Link>
          , before relocating to the UK eight months later.
        </Text>
        <Text>
          I have been and am currently based in Canada, having lived and worked
          in London, England from 2013&ndash;2018. I make my living writing code
          as a user interface developer.
        </Text>
      </Container>
    </>
  )
}
