import Image from 'next/image'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { IoMdPlay } from 'react-icons/io'

import ReactMarkdown from './ReactMarkdown'
import Tracklist from './Tracklist'
import getCmsImage from '../utils/getCmsImage'
import { Box, Heading, Text } from './index'

export default function Release({ release, index, ...props }) {
  const {
    cover,
    description,
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
    <Box
      as='article'
      display='flex'
      flexWrap='wrap'
      mt={index > 0 ? [4, 5, 6] : 0}
      {...props}
    >
      <Box width={['100%', null, '60%']} order={[2, null, 1]}>
        <Box pr={[0, null, 5]}>
          <Heading as='h2' mb={3}>
            {title}
          </Heading>
          <Text mt={0} color='muted'>
            {formattedDate}
          </Text>
          <Text mt={0} color='muted'>
            {format}
          </Text>
          <Text mt={0} color='muted'>
            Label: {label || 'Self-released'}
          </Text>
          {tracks && <Tracklist tracks={tracks} />}
          {link && (
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
        <Box boxShadow={2}>
          <Image
            src={`${coverImage.url}`}
            height={800}
            width={800}
            data-nextimage
          />
        </Box>
      </Box>
    </Box>
  )
}

Release.propTypes = {
  index: PropTypes.number.isRequired,
  release: PropTypes.shape({
    cover: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    label: PropTypes.string,
    link: PropTypes.string,
    releaseDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}
