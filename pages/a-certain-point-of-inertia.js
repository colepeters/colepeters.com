/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'

import setTitle from '../utils/setTitle'
import { Box, Heading, Text, Container, Header } from '../components'

import eastHenderson from '../public/static/acpi/eastHenderson.jpg'
import gullHarbour from '../public/static/acpi/gullHarbour.jpg'
import gullHarbourPath from '../public/static/acpi/gullHarbourPath.jpg'
import lakeWpg from '../public/static/acpi/lakeWpg.jpg'
import namao from '../public/static/acpi/namao.jpg'
import oakHammock from '../public/static/acpi/oakHammock.jpg'

export default function ACertainPointOfInertia() {
  return (
    <>
      {setTitle('A Certain Point of Inertia')}
      <Header />
      <Container>
        <Heading mb={[3, 4]}>A Certain Point of&nbsp;Inertia</Heading>
        <Box mb={[4, 5]}>
          <Text mt={0} color='muted'>
            Album (digital download) and&nbsp;video
          </Text>
          <Text mt={0} color='muted'>
            2022/04, Room40
          </Text>
        </Box>
        <Box mx={[-3, -5]} mb={[4, 5]}>
          <div style={{ padding: '42.29% 0 0 0', position: 'relative' }}>
            <iframe
              src='https://player.vimeo.com/video/676618093?h=2bcdb06cba&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title='A Certain Point Of Inertia'
            />
          </div>
          <script src='https://player.vimeo.com/api/player.js' />
        </Box>
        <Box
          as='figure'
          mb={[4, 5]}
          fontSize={[2, 3, 4]}
          fontStyle='italic'
          style={{ fontFamily: 'Cardo' }}
        >
          <blockquote>
            <Text color='muted' style={{ maxWidth: 'none' }}>
              Canadian artist Cole Peters leans into the echoes of seasonality,
              drifting through the richness of season in his home territories
              around Manitoba. Amongst verdant woods, frosted plains, denuded
              trees and dusty wind beaten fields he uncovers microcosms of life
              — both organic and industrial.
            </Text>
            <Text color='muted' style={{ maxWidth: 'none' }}>
              Capturing spaces that exist at the nexus between these fields of
              existence, A Certain Point Of Inertia is a deep acoustic
              observation, one in which we are privileged a certain perspective
              that is shaped through Peters’ focus and also his patience. What
              results from these recordings is a profound reading of the
              dynamism of the everyday. It’s a reading that celebrates the known
              unknowns, the aspects of our environments that breathe at the very
              fringes of our zones of habitation. His recordings are
              spellbinding audio beacons, signalling from the periphery
              of&nbsp;sense.
            </Text>
          </blockquote>
          <figcaption>
            <cite>
              <Text mt={4} fontSize={[0, 1, 2]} color='muted'>
                Lawrence English, Room40
              </Text>
            </cite>
          </figcaption>
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
            <Text>
              My sense of time and space has changed since the year 2020.
              Against a background of lockdowns and isolation, the passage of
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
              Early in 2021, I began to feel this same stasis seeping into my
              own sense of identity. The boundary between myself and my
              environment seemed to have become increasingly porous. I had the
              strange sensation that I was being subsumed by my surroundings — a
              figure reluctantly fading to&nbsp;ground.
            </Text>
          </Box>
          <Box order={[1, null, 2]}>
            <Heading as='h2' mb={[3, 4]}>
              Listen
            </Heading>
            <iframe
              title='A Certain Point of Inertia, Room40'
              style={{ border: 0, width: 350, height: 470 }}
              src='https://bandcamp.com/EmbeddedPlayer/album=315756963/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/'
              seamless
            >
              <a href='https://room40.bandcamp.com/album/a-certain-point-of-inertia'>
                A Certain Point Of Inertia by Cole Peters
              </a>
            </iframe>
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
            In contemplating this experience, I began to question whether my
            ongoing practice of field recording might help me to better
            understand the place and time in which I was living. Where my
            recordings had previously been premised on capturing specific,
            predetermined sounds, it occurred to me that it could also function
            as a means of interrogating the boundaries and relationships between
            myself and my&nbsp;environment.
          </Text>
          <Text ml={[null, null, 'auto']}>
            My recording became more exploratory and intuitive. I would often
            walk out the door without a particular destination or objective in
            mind, hoping only to encounter a place which might contain a sonic
            body that resonated with me on some indeterminate emotional level.
            There was something of the beginner’s mind in this approach, and on
            many days I would return without having made a
            single&nbsp;recording.
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
          <Text>
            The resultant five compositions that comprise A Certain Point of
            Inertia attempt to capture and convey this sensation of dissolving
            into one’s surroundings, while also reflecting on the identity of an
            environment as subjectively experienced through&nbsp;sound.
          </Text>
          <Text>
            There is a certain sense of aesthetic austerity in these recordings,
            deriving from both the sparse nature of the places they were made in
            and my state of mind when making them. But there is also, I believe,
            a reservoir of emotion and contemplation underlying each piece — a
            reflection of this work being some of my most personal in
            recent&nbsp;years.
          </Text>
          <Text>
            While this album materially draws almost exclusively from the
            acoustic and phenomenological sphere of a single region, I do not
            identify it as documentary in nature. Instead, I interpret this
            album as a narrative work, voiced by my surroundings and my evolving
            interpretations of&nbsp;them.
          </Text>
          <Text>
            Although I hope for the opportunity to once again find a home for
            myself beyond the borders of Manitoba in the coming years, I have
            deeply appreciated this experience of coming, at long last, to a
            better understanding of this place and my relationship with&nbsp;it.
          </Text>
        </Box>
        <Box mb={[4, 5]}>
          <Box my={[4, 5]}>
            <hr />
          </Box>
          <Text mx={[null, null, 'auto']}>
            A Certain Point of Inertia was assembled primarily from field
            recordings made on Treaty 1 and Treaty 2 territories in the country
            currently known as Canada. These territories are the ancestral lands
            of the Anishinaabeg, Cree, Oji-Cree, Dakota and Dene peoples, and
            the home of the Métis Nation. As a settler on these lands, I hope
            that this work might exist in part as a humble but determined call
            for reconciliation, the abolishment of the colonial state, and the
            pursuit of equitable&nbsp;coexistence.
          </Text>
          <Text mx={[null, null, 'auto']}>
            Field recordings, assemblage and analogue synthesis recorded
            January&thinsp;–&thinsp;October, 2021; video, December&nbsp;2021.
          </Text>
          <Text mx={[null, null, 'auto']}>
            Mastered by Lawrence English at Negative Space, January&nbsp;2022.
          </Text>
          <Text mx={[null, null, 'auto']}>
            My deepest thanks go out to Lawrence English, Curran Faris, and
            Patricia Wolf for their support of this&nbsp;work.
          </Text>
        </Box>
      </Container>
    </>
  )
}
