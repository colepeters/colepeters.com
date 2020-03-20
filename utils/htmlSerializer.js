import React from 'react'
import { RichText, Elements } from 'prismic-reactjs'

import { Text } from '../components'

export default function htmlSerializer(type, element, content, children, key) {
  switch (type) {
    case Elements.paragraph:
      return React.createElement(Text, { key }, children)

    default:
      return null
  }
}
