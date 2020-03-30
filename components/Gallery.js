import { Heading, RichText, Box, Text } from './index'

import GalleryImage from './GalleryImage'

export default function Gallery({ gallery }) {
  const { title, year, description, entries } = gallery
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
      {description && <RichText render={description} />}

      <Text fontSize={0} color='muted' mt={4} fontStyle='italic'>
        Tap images to zoom in; tap again to zoom out.
      </Text>

      {entries.map(e => (
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
