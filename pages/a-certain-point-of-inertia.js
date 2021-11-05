/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import Link from 'next/link'

import setTitle from '../utils/setTitle'
import { Box, Heading, Text, Container, Header } from '../components'

import eastHenderson from '../public/static/acpi/eastHenderson.jpg'
import floodway from '../public/static/2021-floodway.jpg'
import freightTrain from '../public/static/acpi/freightTrain.jpg'
import gullHarbour from '../public/static/acpi/gullHarbour.jpg'
import gullHarbourBeach from '../public/static/acpi/gullHarbourBeach.jpg'
import gullHarbourPath from '../public/static/acpi/gullHarbourPath.jpg'
import lakeWpg from '../public/static/acpi/lakeWpg.jpg'
import namao from '../public/static/acpi/namao.jpg'
import oakHammock from '../public/static/acpi/oakHammock.jpg'
import parkade from '../public/static/acpi/parkade.jpg'
import ridgewayTerminal from '../public/static/acpi/ridgewayTerminal.jpg'

import httpAuthCheck from '../utils/httpAuthCheck'

export async function getServerSideProps(ctx) {
  const { req, res } = ctx

  await httpAuthCheck(req, res)

  return {
    props: {},
  }
}

export default function ACertainPointOfInertia() {
  return (
    <>
      {setTitle('A Certain Point of Inertia')}
      <Header />
      <Container>
        <Heading mb={[4, 5]}>A Certain Point of Inertia</Heading>
        <Box mx={[-3, -5]} mb={[4, 5]}>
          <Image src={floodway} layout='responsive' placeholder='blur' />
        </Box>
        <Box
          display='grid'
          gridGap={['2rem', '4rem']}
          gridTemplateColumns={['1fr', null, '1.333fr 1fr']}
          mb={[4, 5]}
        >
          <Box order={[2, null, 1]}>
            <Heading as='h2' mb={[3, 4]}>
              Background
            </Heading>
            <Text>
              A Certain Point of Inertia is an album which has emerged from a
              practice of listening as a means of reflection on the relationship
              between one’s own identity and that of an inhabited&nbsp;space.
            </Text>
            <hr />
            <Text>
              My impression of time and space has changed post-2020. Against a
              background of continued lockdowns and isolation, the passage of
              hours, days, weeks and months increasingly blur together, and the
              spaces I move through — few though they are — have seemed to meld
              into a single, undifferentiated&nbsp;volume.
            </Text>
            <Text>
              There is, I believe, a compounding effect at work between this
              sense of collapsing space and time, and my perception of the
              southern region of my home province of Manitoba, Canada.
              Particularly since returning here in 2018 after a six year
              absence, I’ve felt that time seems to flow around this place,
              rather than through it, leaving its cities, towns and endless
              plains locked in a kind of&nbsp;stasis.
            </Text>
            <Text>
              As the months of 2021 wore on, I began to feel this same stasis
              seeping into my own sense of identity. The boundary between myself
              and my environment was becoming increasingly porous. I had the
              strange sensation that I was being subsumed by my surroundings — a
              figure reluctantly fading to&nbsp;ground.
            </Text>
          </Box>
          <Box order={[1, null, 2]}>
            <Heading as='h2' mb={[3, 4]}>
              Listen
            </Heading>
            <iframe
              title='listen'
              width='100%'
              height='400'
              scrolling='no'
              frameBorder='no'
              allow='autoplay'
              src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1331843719%3Fsecret_token%3Ds-BmXsoMauqmu&color=%23847c7c&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&sharing=false'
            />
          </Box>
        </Box>
        <Box
          display='grid'
          gridGap={['2rem', '4rem']}
          gridTemplateColumns='1fr 1fr 1fr'
          mb={[4, 5]}
        >
          <Image src={lakeWpg} layout='responsive' placeholder='blur' />
          <Image src={gullHarbourPath} layout='responsive' placeholder='blur' />
          <Image src={gullHarbour} layout='responsive' placeholder='blur' />
        </Box>
        <Box mb={[4, 5]}>
          <Text ml={[null, null, 'auto']}>
            Since the beginning of 2021, I’d been diving deeper into my
            longstanding interest in field recording; but up to this point, my
            recording had been largely guided by a want of capturing a specific
            body of predetermined sounds. It occurred to me that, in order to
            better understand the place and time in which I was living — and as
            a means of interrogating the boundaries between it and myself —
            field recording presented a unique opportunity for the exploration
            of my environment and my relationship with&nbsp;it.
          </Text>
          <Text ml={[null, null, 'auto']}>
            In considering this proposition, my process began to shift. Instead
            of seeking out particular sounds, my recording became more
            exploratory and intuitive. I would often walk out the door without a
            particular destination or objective in mind, hoping only to
            encounter a place which might contain a sonic body that resonated
            with me on some indeterminate emotional level. There was something
            of the beginner’s mind in this approach, and on many days I would
            return without having made a single recording.
          </Text>
          <Text ml={[null, null, 'auto']}>
            There were some days, however, where the experience of simply
            listening to the world without expectation became transfixing. On
            these rare occasions, I again felt the border between myself and my
            environment becoming diffuse — yet instead of reluctance (and
            without invoking anything of the spiritual), I can only describe
            what I felt as a measure of acceptance, or a kind of mutual, primal
            sympathy with my&nbsp;surroundings.
          </Text>
        </Box>
        <Box
          display='grid'
          gridGap={['2rem', '4rem']}
          gridTemplateColumns='1fr 1fr 1fr'
          mb={[4, 5]}
        >
          <Image src={namao} layout='responsive' placeholder='blur' />
          <Image src={oakHammock} layout='responsive' placeholder='blur' />
          <Image src={eastHenderson} layout='responsive' placeholder='blur' />
        </Box>
        <Box mb={[4, 5]}>
          <Text mx={[null, null, 'auto']}>
            The five compositions that make up A Certain Point of Inertia
            attempt to capture and convey this sensation of dissolving into
            one’s surroundings, while also reflecting on the identity of an
            environment as subjectively experienced through&nbsp;sound.
          </Text>
          <Text mx={[null, null, 'auto']}>
            For the two longer compositions on this album (Immersion as a Means
            of Erosion, Plains Music), I incorporated geographically distinct
            but thematically related recordings into a collage format — another
            instance of collapsing boundaries. In contrast, the two shortest
            tracks (Within a Periphery, Sounding a Lonesome Throat) each
            document unique sonic characteristics of their individual locations.
            The final track (Reassertion) brings together acoustic and EMF
            recordings with analog synthesis as an amalgamated reflection
            in&nbsp;closing.
          </Text>
          <Text mx={[null, null, 'auto']}>
            There is a certain sense of aesthetic austerity in these recordings,
            deriving from both the sparse nature of the places they were made in
            and my state of mind when making them. But there is also, I believe,
            a reservoir of emotion and contemplation underlying each piece — a
            reflection of this work being some of my most personal in
            recent&nbsp;years.
          </Text>
        </Box>
        <Box
          display='grid'
          gridGap={['2rem', '4rem']}
          gridTemplateColumns='1fr 1fr 1fr'
          mb={[4, 5]}
        >
          <Image src={freightTrain} layout='responsive' placeholder='blur' />
          <Image src={parkade} layout='responsive' placeholder='blur' />
          <Image
            src={gullHarbourBeach}
            layout='responsive'
            placeholder='blur'
          />
        </Box>
        <Box mb={[4, 5]}>
          <Text>
            While this album materially draws almost exclusively from the
            acoustic and phenomenological sphere of a single region, I do not
            identify it as documentary in nature. Instead, I interpret this
            album as a narrative work, voiced by my surroundings and my evolving
            interpretations of them.
          </Text>
          <Text>
            While I believe that I may once again call somewhere else home, I
            have deeply appreciated the experience of coming, at long last, to a
            better understanding of this place through the practice
            of&nbsp;listening.
          </Text>
          <Box my={[4, 5]}>
            <hr />
          </Box>
          <Text ml='auto'>
            A Certain Point of Inertia was assembled from field recordings made
            on Treaty 1 and Treaty 2 territories in the country currently known
            as Canada. These territories are the ancestral lands of the
            Anishinaabeg, Cree, Oji-Cree, Dakota and Dene peoples, and the home
            of the Métis Nation. As a settler on these lands, in which the
            Canadian government continues to erode Indigenous peoples’ right to
            self determination through its ongoing legacy of genocide, I hope
            that this work might exist in part as a humble but determined call
            for reconciliation, the abolishment of the colonial state, and the
            pursuit of equitable&nbsp;coexistence.
          </Text>
          <Box my={[4, 5]}>
            <hr />
          </Box>
          <Text>
            Recorded, assembled, processed and mixed January – October 2021.
            Location sounds recorded via Tascam DR-100 MKIII, utilizing EM272
            omni microphones, JrF C-series contact microphone, LOM Geofón, and
            SOMA Ether electromagnetic&nbsp;receiver.
          </Text>
        </Box>
        <Box as='section' mb={[4, 5]}>
          <Heading as='h2' mb={[3, 4]}>
            Artist CV
          </Heading>
          <Box mb={[3, 4]}>
            <Text>
              Cole Peters (born 1985, Canada) is a multidisciplinary artist
              fascinated by matter, energy, space and time, and the ways in
              which these elements shape our universe, our environment, and
              our&nbsp;perception.
            </Text>
            <Text>
              Cole’s work in sound builds on the techniques of musique concrète,
              field recording, and reductive synthesis. His recent and upcoming
              recordings examine texture, pressure and time as subjects unto
              themselves and as scaffolds in an evolving thematic framework
              drawing on the natural sciences and sensory&nbsp;experience.
            </Text>
          </Box>
          <Heading as='h3' mb={[3, 4]}>
            Recent works
          </Heading>
          <Box mb={[3, 4]}>
            <Heading as='h4' mb={1}>
              <Link href='/a-pattern-of-extraction'>
                <a>A Pattern of Extraction</a>
              </Link>
            </Heading>
            <Text fontSize={0}>
              Released 2021/09 (Makade Star)
              <br />
              Limited edition cassette (sold out), digital download
            </Text>
          </Box>
          <Box mb={[3, 4]}>
            <Heading as='h4' mb={1}>
              <Link href='/a-stable-means-of-degradation'>
                <a>A Stable Means of Degradation</a>
              </Link>
            </Heading>
            <Text fontSize={0}>
              Released 2021/07 (Grisaille)
              <br />
              Limited edition cassette (sold out), digital download
            </Text>
          </Box>
          <Box mb={[3, 4]}>
            <Heading as='h4' mb={1}>
              <Link href='/presque-tout'>
                <a>London (UK), 07/06/2014</a>
              </Link>
            </Heading>
            <Text fontSize={0}>
              Released 2021/04 (Presque Tout)
              <br />
              Digital download
            </Text>
          </Box>
          <Box mb={[3, 4]}>
            <Heading as='h4' mb={1}>
              <a href='https://colepeters.bandcamp.com/album/boundary'>
                Boundary (as Unfolding)
              </a>
            </Heading>
            <Text fontSize={0}>
              Released 2020/11 (self released)
              <br />
              Digital download
            </Text>
          </Box>
          <Box mb={[3, 4]}>
            <Heading as='h4' mb={1}>
              <a href='https://colepeters.bandcamp.com/album/initial-state'>
                Initial State (as Unfolding)
              </a>
            </Heading>
            <Text fontSize={0}>
              Released 2020/03 (self released)
              <br />
              Limited edition cassette, digital download
            </Text>
          </Box>
          <Box mb={[3, 4]}>
            <Text fontStyle='italic' fontSize={0}>
              Additional works released 2010–2016 under various monikers on
              Phage Tapes, Prairie Fire Tapes, Absence Tapes, Zvukovina.
            </Text>
          </Box>
          <Box mb={[3, 4]}>
            <Heading as='h3' mb={[3, 4]}>
              Recent performances
            </Heading>
            <Heading as='h4' mb={1}>
              <a href='https://sendandreceive.org'>
                Send + Receive: An International Festival of Sound
              </a>
            </Heading>
            <Text fontSize={0}>2021/09/09</Text>
          </Box>
          <Box mb={[3, 4]}>
            <Heading as='h3' mb={[3, 4]}>
              Press
            </Heading>
            <Heading as='h4' mb={1}>
              <a href='https://witchpolice.com/episodes/wr632-cole-peters'>
                Interview on Witchpolice Radio
              </a>
            </Heading>
            <Text fontSize={0}>2021/10/22</Text>
          </Box>
        </Box>
        <Box maxWidth='75ch' mx='auto'>
          <Image
            src={ridgewayTerminal}
            layout='responsive'
            placeholder='blur'
          />
          <Text py={[4, 5]} mx='auto' textAlign='center'>
            Thank you for listening.
          </Text>
        </Box>
      </Container>
    </>
  )
}
