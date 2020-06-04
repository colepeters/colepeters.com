import { AnimatePresence, motion } from 'framer-motion'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Nav from './Nav'
import { Box, Button, Container, Heading, MotionBox, Text } from './index'

const variants = {
  initial: {
    x: '-1rem',
    opacity: 0,
  },
  show: {
    x: '0rem',
    opacity: 0.99,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 30,
      delayChildren: 0.25,
    },
  },
  hide: {
    opacity: 0,
  },
}

const MotionContainer = motion.custom(Container)

export default function Header() {
  const [navIsOpen, setNavOpen] = useState(false)
  const { pathname } = useRouter()
  const routeIsIndex = pathname === '/'

  return (
    <>
      <Container as='header' my={[4, 5]}>
        <Box position='relative'>
          <hgroup>
            <Heading
              as='h1'
              fontWeight='500'
              fontSize={[2, 3]}
              letterSpacing='-0.025em'
              mt={3}
              mb={2}
            >
              {routeIsIndex ? (
                'Cole Peters'
              ) : (
                <a href='/' style={{ textDecoration: 'none' }}>
                  Cole Peters
                </a>
              )}
            </Heading>
            <Heading
              as='h2'
              fontWeight='400'
              fontSize={1}
              letterSpacing='auto'
              mb={3}
            >
              Visual/sound artist
            </Heading>
          </hgroup>
          {routeIsIndex ? (
            <Nav />
          ) : (
            <Box
              position='absolute'
              top={['-0.625rem', '-0.25rem']}
              right='-1rem'
            >
              <Button onClick={() => setNavOpen(true)} lineHeight='heading'>
                <Box
                  as='span'
                  textDecoration='none'
                  px={[3, 2]}
                  position='relative'
                  top='2px'
                >
                  <IoMdMenu />
                </Box>
                <Text as='span' display={['none', 'inline']} fontWeight={400}>
                  Menu
                </Text>
              </Button>
            </Box>
          )}
        </Box>
      </Container>
      <AnimatePresence>
        {navIsOpen && (
          <MotionBox
            key='nav'
            variants={variants}
            initial='initial'
            animate='show'
            exit='hide'
            position='fixed'
            overflowY='scroll'
            top={0}
            right={0}
            bottom={0}
            left={0}
            zIndex={2}
            bg='white'
          >
            <MotionContainer variants={variants} position='relative'>
              <Box
                position='absolute'
                top={['-0.625rem', '-0.25rem']}
                right={0}
              >
                <Button onClick={() => setNavOpen(false)}>
                  <Box
                    as='span'
                    textDecoration='none'
                    px={[3, 2]}
                    position='relative'
                    top='2px'
                  >
                    <IoMdClose />
                  </Box>
                  <Text as='span' display={['none', 'inline']} fontWeight={400}>
                    Close
                  </Text>
                </Button>
              </Box>
              <Nav />
            </MotionContainer>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  )
}
