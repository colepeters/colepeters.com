import Head from 'next/head'
import { useState } from 'react'

import { Box, Button, Heading, RichText, Text } from './index'

export default function Presentation({ presentation }) {
  const { title, description, entries, year } = presentation

  const [index, setIndex] = useState(0)
  const inc = () => setIndex(prev => prev + 1)
  const dec = () => setIndex(prev => prev - 1)
  const current = entries[index]
  const next = entries[index + 1]
  const prev = entries[index - 1]

  return (
    <>
      <Heading
        mb={year ? 3 : [4, 5]}
        position='relative'
        left={[0, null, '-4px']}
      >
        {title}
      </Heading>
      {year && (
        <Text color='muted' mb={[4, 5]}>
          {year}
        </Text>
      )}

      {description && <RichText render={description} />}

      <Box my={[4, 5]}>
        <Box key={current.image.url} as='figure' m={0}>
          <img src={current.image.url} style={{ maxHeight: '75vh' }} />
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
        </Box>
        <Box my={4}>
          <Button onClick={dec} disabled={!prev} fontSize={0}>
            Previous
          </Button>
          <Text as='span' px={2}>
            /
          </Text>
          <Button onClick={inc} disabled={!next} fontSize={0}>
            Next
          </Button>
          {!next && (
            <>
              <Text as='span' px={2}>
                /
              </Text>
              <Button onClick={() => setIndex(0)} fontSize={0}>
                Restart
              </Button>
            </>
          )}
        </Box>
        {next && (
          <Head>
            <link
              rel='preload'
              as='image'
              href={next.image.url}
              key={next.image.url}
            />
          </Head>
        )}
      </Box>
    </>
  )
}
