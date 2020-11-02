import Head from 'next/head'
import PropTypes from 'prop-types'
import { useState } from 'react'

import ReactMarkdown from './ReactMarkdown'
import getCmsImage from '../utils/getCmsImage'
import { Box, Button, Heading, Text } from './index'

export default function Presentation({ title, description, entries, year }) {
  const [index, setIndex] = useState(0)
  const inc = () => setIndex(prev => prev + 1)
  const dec = () => setIndex(prev => prev - 1)
  const current = getCmsImage(entries[index])
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
          {/* Pad en dashes with hair spaces */}
          {year.replace('–', ' – ')}
        </Text>
      )}

      {description && <ReactMarkdown source={description} />}

      <Box my={[4, 5]}>
        <Box key={current.url} as='figure' m={0}>
          <img
            src={current.url}
            alt={current.title}
            style={{ maxHeight: '75vh' }}
          />
          <figcaption>
            <Text fontSize={0} my={3} fontWeight='500'>
              {current.title}
            </Text>
            {current.description && (
              <Box fontSize={0} color='muted'>
                <ReactMarkdown source={current.description} />
              </Box>
            )}
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
          <Text
            as='span'
            display='block'
            color='muted'
            pr={2}
            fontSize={0}
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {index + 1} / {entries.length}
          </Text>
        </Box>

        {next && (
          <Head>
            <link
              rel='preload'
              as='image'
              href={getCmsImage(next).url}
              key={getCmsImage(next).url}
            />
          </Head>
        )}
      </Box>
    </>
  )
}

Presentation.propTypes = {
  description: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}
