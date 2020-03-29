import styled from 'styled-components'
import { color, layout, position, space, typography } from 'styled-system'

const Text = styled.p`
  ${color}
  ${layout}
  ${space}
  ${typography}
  max-width: 60ch;
`

Text.displayName = 'Text'

export default Text
