import PropTypes from 'prop-types'
import RMD from 'react-markdown'

import Text from './primitives/Text'

const renderers = {
  paragraph: Text,
}

export default function ReactMarkdown({ source }) {
  return <RMD renderers={renderers} source={source} />
}

ReactMarkdown.propTypes = {
  source: PropTypes.string.isRequired,
}
