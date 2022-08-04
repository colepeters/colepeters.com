import styled from 'styled-components'

import Text from './Text'

const List = styled(Text).attrs((props) => ({
  as: props.as || 'ul',
}))`
  ${(props) => props.reset && 'list-style: none;'}
`

List.displayName = 'List'

export default List
