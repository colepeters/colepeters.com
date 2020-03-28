import { Heading, RichText, Box, Text } from '../index'

export default function Gallery({ gallery }) {
  return (
    <>
      <Heading mb={[4, 5]}>{gallery.title}</Heading>
      {gallery.description && <RichText render={gallery.description} />}

      {gallery.entries.map(e => (
        <Box as='figure' key={e.image.alt} mx={0} mt={[5, 6]}>
          <img
            src={e.image.url}
            alt={e.image.alt}
            style={{ maxWidth: '100%', maxHeight: '95vh' }}
          />
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
