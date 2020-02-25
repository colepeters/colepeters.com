import styled from 'styled-components'
import { space, typography } from 'styled-system'

const Text = styled.p`
  ${space}
  ${typography}
  max-width: 66ch;
`

Text.displayName = 'Text'

export default Text
