export default function ACPIVideo({ html }) {
  return html`
    <style>
      iframe {
        width: 100%;
        aspect-ratio: 2.368 / 1;
      }
    </style>
    <iframe src="https://player.vimeo.com/video/676618093?h=2bcdb06cba&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen />
    <script src="https://player.vimeo.com/api/player.js" />
  `
}
