import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Nav from './Nav'
import { Box, Button, Container, Heading, MotionBox } from './index'

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
      <Container as='header' my={[4, null, 5]}>
        <hgroup>
          <Heading
            as='h1'
            fontWeight='500'
            fontSize={3}
            letterSpacing='-0.025em'
            my={3}
          >
            Cole Peters
          </Heading>
          <Heading
            as='h2'
            fontWeight='400'
            fontSize={1}
            letterSpacing='auto'
            my={3}
          >
            Artist working with paint and sound.
          </Heading>
        </hgroup>
        {routeIsIndex ? (
          <Nav />
        ) : (
          <Button onClick={() => setNavOpen(true)}>Menu</Button>
        )}
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
            top={0}
            right={0}
            bottom={0}
            left={0}
            bg='white'
          >
            <MotionContainer variants={variants}>
              <Box mt={[4, null, 5]}>
                <Button onClick={() => setNavOpen(false)}>Close menu</Button>
              </Box>
              <Nav />
            </MotionContainer>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  )
}
