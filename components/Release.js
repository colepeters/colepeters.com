import Image from 'next/image'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { IoMdPlay } from 'react-icons/io'

import ReactMarkdown from './ReactMarkdown'
import Tracklist from './Tracklist'
import getCmsImage from '../utils/getCmsImage'
import { Box, Heading, Text } from './index'

export default function Release({ release, ...props }) {
  const {
    cover,
    description,
    embed,
    format,
    label,
    link,
    releaseDate,
    title,
    tracks,
  } = release

  const coverImage = getCmsImage(cover)
  const formattedDate = dayjs(releaseDate).format('YYYY/MM')

  return (
    <Box as='article' {...props}>
      <Box mb={[4, 5]}>
        <Heading as='h1' mb={[4, 5]}>
          {title}
        </Heading>
        <Text mt={0} color='muted'>
          {format}
        </Text>
        <Text mt={0} color='muted'>
          {formattedDate}, {label || 'self-released'}
        </Text>
      </Box>
      <Box display='flex' flexWrap='wrap'>
        <Box width={['100%', null, '60%']} order={[2, null, 1]}>
          <Box pr={[0, null, 5]}>
            {tracks && <Tracklist tracks={tracks} />}
            {link && (
              <Text fontWeight={500} mt={[4, null, 0]} mb={[5, null, 4]}>
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
            )}
            <ReactMarkdown source={description} />
          </Box>
        </Box>

        <Box
          width={['100%', '60%', '40%']}
          order={[1, null, 2]}
          mb={[4, null, 0]}
          position={['relative', null, 'absolute']}
          right={[null, null, 0]}
        >
          <Box boxShadow={2} mb={3}>
            <Image
              src={`${coverImage.url}`}
              layout='responsive'
              height={800}
              width={800}
              data-nextimage
            />
          </Box>
          {embed && <Box my={3} dangerouslySetInnerHTML={{ __html: embed }} />}
        </Box>
      </Box>
    </Box>
  )
}

Release.propTypes = {
  release: PropTypes.shape({
    cover: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    embed: PropTypes.string,
    format: PropTypes.string.isRequired,
    label: PropTypes.string,
    link: PropTypes.string,
    releaseDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}
