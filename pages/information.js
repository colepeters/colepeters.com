import Link from 'next/link'
import { Container, Header, Heading, Text } from '../components'

export default function Information() {
  return (
    <>
      <Header />
      <Container as='section'>
        <Heading as='h2' fontWeight='500'>
          Information
        </Heading>
        <Text>
          My work is an attempt to feed back upon the world around me. My recent
          output has centred on investigations of quantum and classical physics,
          processes of entropy and decay, and a general exploration of reductive
          aesthetics.
        </Text>
        <Text>
          Paint and sound are my primary mediums. In the past, my work has
          encompassed drawing, graffiti, graphic design, writing and
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
          , before relocating to the UK eight months later. You may also know me
          as having lead the development of the{' '}
          <Link href='https://firstthingsfirst2014.net/'>
            <a>First Things First 2014</a>
          </Link>{' '}
          manifesto.
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
