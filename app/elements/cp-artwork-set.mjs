export default function ArtworkSet({ html, state }) {
  const { store = {} } = state
  const { artworks = [] } = store

  const artworkSet = artworks.map((a, i) => `
  <li>
    <cp-artwork href="${a.href}" ${i === 0 ? 'loading="eager"' : ''}>
      <p slot="title">${a.title}</p>
      ${a.caption ? `<p slot="caption">
        ${a.caption}
      </p>` : ''}
    </cp-artwork>
  </li>
  `).join('')

  return html`
    <ul class="mb7 list-none grid gap7">
      ${artworkSet}
    </ul>
  `
}
