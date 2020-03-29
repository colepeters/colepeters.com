import { Container, Header, Heading, Text } from '../components'

export default function Biography() {
  return (
    <>
      <Header />
      <Container as='section'>
        <Heading mb={[4, 5]} position='relative' left={[0, null, '-4px']}>
          Biography
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
          <a href='https://www.discogs.com/label/181172-Prairie-Fire'>
            Prairie Fire Tapes
          </a>{' '}
          in addition to my own Stasis microlabel. In 2012, I co-founded the
          design studio <a href='https://burdocks.ca'>Burdocks</a>, before
          relocating to the UK eight months later. You may also know me as
          having lead the development of the{' '}
          <a href='https://firstthingsfirst2014.net/'>
            First Things First 2014
          </a>{' '}
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
