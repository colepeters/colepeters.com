import { List, Text, Box } from '../index'

export default function Tracklist({ tracks }) {
  return (
    <List reset as='ol' pl={0} my={4}>
      {tracks.map((t, i) => (
        <Text as='li' key={t}>
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
          {t}
        </Text>
      ))}
    </List>
  )
}
