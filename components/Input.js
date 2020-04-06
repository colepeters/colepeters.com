import styled from 'styled-components'

import { Text } from './index'

const StyledInput = styled.input`
  appearance: none;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
  display: block;
  line-height: ${props => props.theme.lineHeights.body};
  padding: ${props => props.theme.space[2]};
  position: relative;
  margin: ${props => props.theme.space[1]} 0 ${props => props.theme.space[3]} 0;
  transition: background 0.3s ease;
  width: 100%;

  &:focus {
    background: rgba(0, 0, 0, 0.025);
    outline: none;
  }
`

StyledInput.displayName = 'Input'

export default function Input({
  label,
  required = true,
  type = 'text',
  ...props
}) {
  return (
    <Text as='label'>
      <Text as='span' fontWeight='500'>
        {label}
      </Text>{' '}
      {required && (
        <Text as='span' color='muted'>
          *
        </Text>
      )}
      <StyledInput type={type} {...props} />
    </Text>
  )
}
