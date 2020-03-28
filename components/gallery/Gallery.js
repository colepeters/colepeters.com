import { Heading, RichText, Box, Text } from '../index'

import GalleryImage from './GalleryImage'

export default function Gallery({ gallery }) {
  return (
    <>
      <Heading mb={[4, 5]}>{gallery.title}</Heading>
      {gallery.description && <RichText render={gallery.description} />}

      <Text
        fontSize={0}
        color='muted'
        mt={4}
        fontStyle='italic'
        display={['none', null, 'block']}
      >
        Tap images to zoom in; tap again to zoom out.
      </Text>

      {gallery.entries.map(e => (
        <Box as='figure' key={e.image.alt} mx={0} mt={[5, 6]}>
          <GalleryImage src={e.image.url} alt={e.image.alt} />
          <Text as='figcaption'>
            <Text>{e.name}</Text>
            <Box fontSize={0} color='muted'>
              <RichText render={e.caption} />
            </Box>
          </Text>
        </Box>
      ))}
    </>
  )
}
