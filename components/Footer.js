import { Box, Container, Text } from './index'

export default function Footer() {
  return (
    <Container as='footer' pt={6} pb={[4, 5]}>
      <Box pt={4} borderTop='1px solid' borderColor='lightGrey' color='muted'>
        <Text fontSize={0} m={0}>
          All work © Cole Peters. All rights reserved.
        </Text>
        <Text fontSize={0} m={0}>
          <a
            href='https://www.youtube.com/watch?v=dMjJpAVZydI'
            style={{ textDecoration: 'none', color: 'currentColor' }}
          >
            Splinter the empty silence. We make noise not&nbsp;music.
          </a>
        </Text>
      </Box>
    </Container>
  )
}
