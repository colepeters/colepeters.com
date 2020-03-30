import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import usePrevious from '../hooks/usePrevious'
import { Box, Button, Heading, RichText, Text } from './index'

const MotionBox = motion.custom(Box)

export default function Presentation({ presentation }) {
  const { title, description, entries } = presentation

  const [index, setIndex] = useState(0)
  const inc = () => setIndex(prev => prev + 1)
  const dec = () => setIndex(prev => prev - 1)
  const current = entries[index]
  const next = entries[index + 1]

  const prevIndex = usePrevious(index)
  const direction = prevIndex > index ? 'prev' : 'next'

  const [clientReady, setClientReady] = useState(false)

  // Set clientReady after hydration
  useEffect(() => {
    setClientReady(true)
  }, [])

  const [height, setHeight] = useState(0)
  const figureRef = useRef()

  // Set height on each image change (client side only)
  useLayoutEffect(() => {
    clientReady && setHeight(figureRef.current.getBoundingClientRect().height)
  }, [clientReady, figureRef.current])

  const variants = {
    enter: direction => ({
      opacity: 0,
    }),
    centre: {
      opacity: 1,
      // x: '0rem',
    },
    exit: direction => ({
      opacity: 0,
    }),
  }

  return (
    <>
      <Heading mb={[4, 5]} position='relative' left={[0, null, '-4px']}>
        {title}
      </Heading>

      {description && <RichText render={description} />}

      {clientReady && (
        <Box position='relative' height={height} onClick={inc} my={[4, 5]}>
          <AnimatePresence custom={direction} initial={false}>
            <Box key={current.image.url}>
              <MotionBox
                key={current.image.url}
                as='figure'
                m={0}
                custom={direction}
                variants={variants}
                initial='enter'
                animate='centre'
                exit='exit'
                style={{ position: 'absolute' }}
                src={current.image.url}
              >
                <img src={current.image.url} ref={figureRef} />
                <figcaption>
                  <Text fontSize={0} my={3}>
                    {current.caption}
                    <Text
                      as='span'
                      display='block'
                      color='muted'
                      pr={2}
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {index + 1} / {entries.length}
                    </Text>
                  </Text>
                </figcaption>
              </MotionBox>
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
      )}
    </>
  )
}
