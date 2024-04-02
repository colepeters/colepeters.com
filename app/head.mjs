import { getStyleTag } from '@enhance/arc-plugin-styles/get-styles'

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
      ${getStyleTag()}
      <style>
        @font-face {
          font-family: Inter;
          src: url("/_public/fonts/InterVariable-subset.woff2") format("woff2-variations");
          src: url("/_public/fonts/InterVariable-subset.woff2") format("woff2") tech("variations");
          font-weight: 100 900;
        }
        @font-face {
          font-family: Inter;
          src: url("/_public/fonts/InterVariable-Italic-subset.woff2") format("woff2-variations");
          src: url("/_public/fonts/InterVariable-Italic-subset.woff2") format("woff2") tech("variations");
          font-weight: 100 900;
          font-style: italic;
        }
      </style>
      <link rel="stylesheet" href="/_public/global.css" />
      <link rel="icon" href="/_public/favicon.svg">
    </head>
    <body class="font-sans leading3">
  `
}
