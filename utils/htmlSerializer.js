import React from 'react'
import { Elements } from 'prismic-reactjs'

import { Text } from '../components'

export default function htmlSerializer(type, element, content, children, key) {
  switch (type) {
    case Elements.paragraph:
      return React.createElement(Text, { key }, children)

    case Elements.hyperlink:
      return React.createElement('a', { href: element.data.url, key }, children)

    default:
      return null
  }
}
