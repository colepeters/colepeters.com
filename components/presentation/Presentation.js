import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import usePrevious from '../../hooks/usePrevious'
import { Box } from '../index'

// const MotionBox = motion.custom(Box)

export default function Presentation({ presentation }) {
  const { entries } = presentation

  const [index, setIndex] = useState(0)
  const inc = () => setIndex(prev => prev + 1)
  const dec = () => setIndex(prev => prev - 1)
  const current = entries[index]
  const next = entries[index + 1]

  const prevIndex = usePrevious(index)
  const direction = prevIndex > index ? 'prev' : 'next'

  const variants = {
    enter: direction => ({
      opacity: 0,
      // x: direction === 'next' ? '10rem' : '-10rem',
    }),
    centre: {
      opacity: 1,
      // x: '0rem',
    },
    exit: direction => ({
      opacity: 0,
      // x: direction === 'next' ? '-10rem' : '10rem',
    }),
  }

  return (
    <Box
      position='relative'
      width={1}
      height={['50vh', '66vh', '80vh']}
      onClick={inc}
    >
      <AnimatePresence custom={direction} initial={false}>
        <Box key={current.image.url}>
          <motion.img
            key={current.image.url}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='centre'
            exit='exit'
            style={{ position: 'absolute' }}
            src={current.image.url}
          />
          <Head>
            <link
              rel='preload'
              as='image'
              href={next.image.url}
              key={next.image.url}
            />
          </Head>
        </Box>
      </AnimatePresence>
    </Box>
  )
}
