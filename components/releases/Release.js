import { RichText } from 'prismic-reactjs'

import Tracklist from './Tracklist'
import { Box, Heading, Text } from '../index'

export default function Release({ release, ...props }) {
  return (
    <Box as='article' display='flex' flexWrap='wrap' {...props}>
      <Box width={['100%', null, '50%']} order={[2, null, 1]}>
        <Box pr={[0, null, 4]}>
          <Heading as='h3' mb={3}>
            {RichText.asText(release.data.title)}
          </Heading>
          <Text>{release.data.release_date.split('-').join('/')}</Text>

          <Tracklist tracks={release.data.tracks} />

          <Text>{RichText.asText(release.data.description)}</Text>
        </Box>
      </Box>

      <Box width={['100%', null, '50%']} order={[1, null, 2]} mb={3}>
        <Box p={3} bg='lightGrey' maxWidth={['35ch', null, 'none']}>
          <img src={release.data.cover.url} />
        </Box>
      </Box>
    </Box>
  )
}
