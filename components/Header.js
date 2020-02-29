import styled from 'styled-components'
import { useRouter } from 'next/router'

import { Box, Container, Heading, List, NavLink, Text } from '../components'

const pages = [
  {
    name: 'Sound',
    href: '/sound',
    subpages: [
      {
        name: 'Unfolding',
        href: '/unfolding',
      },
      {
        name: 'Discography',
        href: '/discography',
      },
    ],
  },
  { name: 'Painting', href: '/painting' },
  { name: 'Photographs', href: '/photographs' },
  { name: 'Info', href: '/info' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const { pathname } = useRouter()
  const showSubpages = page =>
    page.subpages &&
    (page.href === pathname ||
      page.subpages.map(({ href }) => href).includes(pathname))

  return (
    <Container as='header' my={[4, null, 5]}>
      <hgroup>
        <Heading as='h1' fontWeight='600' fontSize='0' letterSpacing='auto'>
          Cole Peters
        </Heading>
        <Heading as='h2' fontWeight='400' fontSize='0' letterSpacing='auto'>
          Artist working with paint and sound.
        </Heading>
      </hgroup>
      <Box as='nav' pl={3} borderLeft='6px solid rgba(0,0,0,0.05)'>
        <List reset pl={0} m={0}>
          {pages.map(p => (
            <Text as='li' mb={2} key={p.href} fontSize='0'>
              <NavLink href={p.href}>{p.name}</NavLink>
              {showSubpages(p) && (
                <List reset pl={2} mt={2}>
                  {p.subpages.map(sp => (
                    <Text as='li' mb={2} key={sp.href} fontSize={0}>
                      <Text as='span' color='rgba(0,0,0,0.25)'>
                        └─{' '}
                      </Text>
                      <NavLink href={sp.href}>{sp.name}</NavLink>
                    </Text>
                  ))}
                </List>
              )}
            </Text>
          ))}
        </List>
      </Box>
    </Container>
  )
}
