import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/router'

import Nav from './Nav'
import { Box, Button, Container, Heading, MotionBox } from './index'

const variants = {
  show: {
    x: '0rem',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 30,
      delayChildren: 0.25,
    },
  },
  hide: {
    x: '-1rem',
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
            fontWeight='600'
            fontSize={3}
            letterSpacing='auto'
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
          <Button onClick={() => setNavOpen(true)}>Contents</Button>
        )}
      </Container>
      <AnimatePresence>
        {navIsOpen && (
          <MotionBox
            key='nav'
            variants={variants}
            initial='hide'
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
              <Nav />
            </MotionContainer>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  )
}
