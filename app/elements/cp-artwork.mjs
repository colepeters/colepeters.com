export default function Artwork({ html, state }) {
  const { attrs } = state
  const { href } = attrs
  return html`
    <style>
      img {
        max-block-size: 95vh;
      }

      [slot="caption"]:not(empty) {
        margin-block-start: var(--space--4);
      }
    </style>

    <figure>
      <enhance-image
        src="${href}"
        alt=""
        loading="lazy"
      ></enhance-image>
      <figcaption class="mbs0">
        <slot name="title"></slot>
        <div class="text-1 muted measure">
          <slot name="caption"></slot>
        </div>
      </figcaption>
    </figure>
  `
}
