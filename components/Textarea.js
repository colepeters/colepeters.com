import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from './primitives/Text'

const StyledTextarea = styled.textarea`
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
  resize: vertical;
  transition: background 0.3s ease;
  width: 100%;

  &:focus {
    background: rgba(0, 0, 0, 0.025);
    outline: none;
  }
`

StyledTextarea.displayName = 'Input'

export default function Textarea({ label, required, ...props }) {
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
      <StyledTextarea async rows={4} {...props} />
    </Text>
  )
}

Textarea.defaultProps = {
  required: true,
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
}
