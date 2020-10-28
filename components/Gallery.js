import PropTypes from 'prop-types'
import { IoIosExpand } from 'react-icons/io'

import ReactMarkdown from './ReactMarkdown'
import getCmsImage from '../utils/getCmsImage'
import { Heading, Box, Text } from './index'

import GalleryImage from './GalleryImage'

export default function Gallery({ title, year, description, entries }) {
  return (
    <>
      <Heading
        mb={year ? 3 : [4, 5]}
        position='relative'
        left={[0, null, '-4px']}
      >
        {title}
      </Heading>
      {year && (
        <Text color='muted' mb={[4, 5]}>
          {year}
        </Text>
      )}
      {description && <ReactMarkdown source={description} />}

      <Text fontSize={0} color='muted' mt={4} fontStyle='italic'>
        <Text as='span' pr={2} verticalAlign='middle'>
          <IoIosExpand />
        </Text>
        Tap images to zoom in; tap again to zoom out.
      </Text>

      {entries.map(e => (
        <Box as='figure' key={getCmsImage(e).title} mx={0} mt={[5, 6]}>
          <GalleryImage image={getCmsImage(e)} />
          <Text as='figcaption'>
            <Text>{getCmsImage(e).title}</Text>
            <Box fontSize={0} color='muted'>
              <ReactMarkdown source={getCmsImage(e).description} />
            </Box>
          </Text>
        </Box>
      ))}
    </>
  )
}

Gallery.propTypes = {
  description: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  })).isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}
