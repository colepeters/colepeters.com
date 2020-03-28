import { RichText as RT } from 'prismic-reactjs'

import htmlSerializer from '../utils/htmlSerializer'

export default function RichText({ render }) {
  return <RT htmlSerializer={htmlSerializer} render={render} />
}
