import styled from 'styled-components'

import Box from './primitives/Box'

export const Container = styled(Box).attrs(() => ({
  maxWidth: ['100vw', '85vw', '1152px'],
  mx: 'auto',
  px: 3,
}))``
