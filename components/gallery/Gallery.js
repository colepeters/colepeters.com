import { Heading, RichText, Box, Text } from '../index'

import GalleryImage from './GalleryImage'

export default function Gallery({ gallery }) {
  return (
    <>
      <Heading
        mb={gallery.year ? 3 : [4, 5]}
        position='relative'
        left={[0, null, '-4px']}
      >
        {gallery.title}
      </Heading>
      {gallery.year && (
        <Text color='muted' mb={[4, 5]}>
          {gallery.year}
        </Text>
      )}
      {gallery.description && <RichText render={gallery.description} />}

      <Text fontSize={0} color='muted' mt={4} fontStyle='italic'>
        Tap images to zoom in; tap again to zoom out.
      </Text>

      {gallery.entries.map(e => (
        <Box as='figure' key={e.image.alt || e.name} mx={0} mt={[5, 6]}>
          <GalleryImage src={e.image.url} alt={e.image.alt || e.name} />
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
