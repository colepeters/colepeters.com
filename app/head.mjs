import { getLinkTag } from '@enhance/arc-plugin-styles/get-styles'

import pathTitles from './lib/path-titles.mjs'

export default function Head(state) {
  const { req } = state
  const { path } = req
  const title = `Cole Peters — ${pathTitles[path]}`
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      ${getLinkTag()}
      <style>
        @font-face {
          font-family: Inter;
          src: url("/_public/fonts/Inter.var.woff2") format("woff2-variations");
          font-weight: 100 900;
          font-display: swap;
        }
      </style>
      <link rel="stylesheet" href="/_public/global.css" />
      <link rel="icon" href="/_public/favicon.svg">
    </head>
  `
}
