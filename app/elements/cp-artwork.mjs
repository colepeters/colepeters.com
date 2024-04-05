export default function Artwork({ html, state }) {
  const { attrs } = state
  const { href } = attrs
  return html`
    <style>
      img {
        max-block-size: 95vh;
      }
    </style>

    <figure>
      <enhance-image
        src="${href}"
        alt=""
      ></enhance-image>
      <figcaption>
        <slot name="title"></slot>
        <div class="text-1 muted">
          <slot name="caption"></slot>
        </div>
      </figcaption>
    </figure>
  `
}
