import { List, Text, Box } from '../index'

export default function Tracklist({ tracks }) {
  return (
    <List reset as='ol' pl={0} my={4}>
      {tracks.map(({ name, length }, i) => (
        <Text as='li' key={name}>
          <Box display='inline-flex' width={1}>
            <Text as='span' width={['50%', null, '66%']}>
              <Text
                as='span'
                display='inline-block'
                color='muted'
                fontSize={0}
                width='2ch'
                style={{
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {i + 1}.
              </Text>{' '}
              {name}
            </Text>
            <Text
              as='span'
              color='muted'
              style={{
                fontVariantNumeric: 'tabular-nums slashed-zero',
              }}
            >
              {length}
            </Text>
          </Box>
        </Text>
      ))}
    </List>
  )
}
