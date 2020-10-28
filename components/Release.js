import Image from 'next/image'
import PropTypes from 'prop-types'
import { IoMdPlay } from 'react-icons/io'

import ReactMarkdown from './ReactMarkdown'
import Tracklist from './Tracklist'
import getCmsImage from '../utils/getCmsImage'
import { Box, Heading, Text } from './index'

export default function Release({ release, ...props }) {
  const {
    cover,
    description,
    format,
    link,
    releaseDate,
    title,
    tracks,
  } = release

  const coverImage = getCmsImage(cover)

  return (
    <Box as='article' display='flex' flexWrap='wrap' {...props}>
      <Box width={['100%', null, '60%']} order={[2, null, 1]}>
        <Box pr={[0, null, 5]}>
          <Heading as='h2' mb={3}>
            {title}
          </Heading>
          <Text color='muted'>{releaseDate.split('-').join('/')}</Text>
          <Text mt={0} color='muted'>
            {format}
          </Text>
          <Tracklist tracks={tracks} />
          <Text fontWeight={500} my={4}>
            <a href={link}>
              <Text
                as='span'
                pr={2}
                textDecoration='none'
                verticalAlign='middle'
              >
                <IoMdPlay />
              </Text>
              Stream and purchase on Bandcamp
            </a>
          </Text>
          <ReactMarkdown source={description} />
        </Box>
      </Box>

      <Box width={['100%', null, '40%']} order={[1, null, 2]} mb={3}>
        <Box
          display='flex'
          p={3}
          mb={[3, null, 0]}
          bg='white'
          maxWidth={['35ch', null, 'none']}
          boxShadow='0 4px 32px rgba(0,0,0,0.075), 0 2px 6px -2px rgba(0,0,0,0.2)'
        >
          <Image src={`${coverImage.url}?fl=progressive&w=800`} width='800' height='800' />
        </Box>
      </Box>
    </Box>
  )
}

Release.propTypes = {
  release: PropTypes.shape({
    cover: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}
