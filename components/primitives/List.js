import styled from 'styled-components'

import Text from './Text'

const List = styled(Text).attrs(props => ({
  as: 'ul',
  p: props.pl || 0,
  m: props.m || 0,
}))`
  ${props => props.reset && 'list-style: none;'}
`

List.displayName = 'List'

export default List
