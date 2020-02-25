import Link from 'next/Link'
import { Box, Heading, List, Text } from '../components'
import { Container } from '../components/layout'

const pages = [
  { name: 'Sounds', href: '/sounds' },
  { name: 'Paintings', href: '/paintings' },
  { name: 'Photographs', href: '/photographs' },
  { name: 'Info', href: '/info' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <Container as='header' my={4}>
      <hgroup>
        <Heading as='h1' fontWeight='500' fontSize={3} letterSpacing='auto'>
          Cole Peters
        </Heading>
        <Heading as='h2' fontWeight='400' fontSize={1} letterSpacing='auto'>
          Artist working with paint and sound.
        </Heading>
      </hgroup>
      <Box as='nav' pl={3} borderLeft='4px solid rgba(0,0,0,0.25)'>
        <List reset>
          {pages.map(p => (
            <Text as='li' mb={2} key={p.href}>
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
