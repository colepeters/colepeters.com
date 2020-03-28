import Tracklist from './Tracklist'
import { Box, Heading, RichText, Text } from '../index'

export default function Release({ release, ...props }) {
  return (
    <Box as='article' display='flex' flexWrap='wrap' {...props}>
      <Box width={['100%', null, '50%']} order={[2, null, 1]}>
        <Box pr={[0, null, 5]}>
          <Heading as='h2' mb={3}>
            {release.data.title}
          </Heading>
          <Text color='muted'>
            {release.data.release_date.split('-').join('/')}
          </Text>
          <Text mt={0} color='muted'>
            {release.data.format}
          </Text>
          <Tracklist tracks={release.data.tracks} />
          <RichText render={release.data.description} />
        </Box>
      </Box>

      <Box width={['100%', null, '50%']} order={[1, null, 2]} mb={3}>
        <Box
          display='flex'
          p={[3, null, 4]}
          mb={[3, null, 0]}
          bg='lightGrey'
          maxWidth={['35ch', null, 'none']}
          boxShadow='0 4px 32px rgba(0,0,0,0.075), 0 2px 6px rgba(0,0,0,0.05)'
        >
          <img src={release.data.cover.url} />
        </Box>
      </Box>
    </Box>
  )
}
