import PropTypes from 'prop-types'

import Text from './primitives/Text'

export default function TabularNumber({ children }) {
  return (
    <Text
      as='span'
      display='inline-block'
      color='muted'
      fontSize={['12px', null, '13px']}
      width='2ch'
      style={{
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {children}
    </Text>
  )
}

TabularNumber.propTypes = {
  children: PropTypes.node.isRequired,
}
