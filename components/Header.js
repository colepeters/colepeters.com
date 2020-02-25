import Link from 'next/Link'
import { Box, Container, Heading, List, Text } from '../components'

const pages = [
  { name: 'Sound', href: '/sound' },
  { name: 'Painting', href: '/painting' },
  { name: 'Photographs', href: '/photographs' },
  { name: 'Info', href: '/info' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <Container as='header' my={[4, null, 5]}>
      <hgroup>
        <Heading as='h1' fontWeight='500' fontSize='0' letterSpacing='auto'>
          Cole Peters
        </Heading>
        <Heading as='h2' fontWeight='400' fontSize='0' letterSpacing='auto'>
          Artist working with paint and sound.
        </Heading>
      </hgroup>
      <Box as='nav' pl={3} borderLeft='6px solid rgba(0,0,0,0.05)'>
        <List reset>
          {pages.map(p => (
            <Text as='li' mb={2} key={p.href} fontSize='0'>
              <Link href={p.href}>
                <a>{p.name}</a>
              </Link>
            </Text>
          ))}
        </List>
      </Box>
    </Container>
  )
}
