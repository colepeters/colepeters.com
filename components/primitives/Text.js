import styled from 'styled-components'
import { color, layout, space, typography } from 'styled-system'

const Text = styled.p`
  ${color}
  ${layout}
  ${space}
  ${typography}
  max-width: 66ch;
`

Text.displayName = 'Text'

export default Text
