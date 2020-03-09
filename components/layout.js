import styled from 'styled-components'

import Box from './primitives/Box'

export const Container = styled(Box).attrs(() => ({
  maxWidth: ['100vw', '80vw', '75vw'],
  mx: 'auto',
  px: 3,
}))``
