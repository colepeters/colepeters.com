import setTitle from '../utils/setTitle'
import {
  unfolding,
  eponymous,
  gomeisa,
  secretGirls,
  museumsOfSleep,
} from '../data/discography'
import { Container, Box, Header, Heading, List, Text } from '../components'

const Entries = ({ collection, ...props }) => {
  const { name, description, entries } = collection
  return (
    <Box as='section' mb={[4, 5]} {...props}>
      <Heading as='h2' mb={3}>
        {name}
      </Heading>
      {description && (
        <Text mb={4} pl={[3, 4]}>
          {description}
        </Text>
      )}
      <List reset pl={[3, 4]} m={0}>
        {entries.map(e => (
          <Text as='li' key={e.title} mb={3}>
            <Text as='span' display='block'>
              {e.title}
            </Text>
            <Text as='span' fontSize={0} color='muted'>
              {e.year}, {e.label || 'self released'}
            </Text>
          </Text>
        ))}
      </List>
    </Box>
  )
}

export default function Discography() {
  return (
    <>
      {setTitle('Discography')}
      <Header />
      <Container as='section'>
        <Heading mb={[4, 5]} position='relative' left={[0, null, '-4px']}>
          Discography
        </Heading>
        <Text mb={[4, 5]}>
          I’ve been creating music in various forms and under different monikers
          since the early 2000s. The following is a selection of the titles
          worth mentioning. Recent releases and some older titles are available
          for streaming and purchase on{' '}
          <a href='https://colepeters.bandcamp.com'>my&nbsp;Bandcamp</a>.
        </Text>
        <Entries collection={unfolding} />
        <Entries collection={eponymous} />
        <Entries collection={gomeisa} />
        <Entries collection={secretGirls} />
        <Entries collection={museumsOfSleep} />
      </Container>
    </>
  )
}
