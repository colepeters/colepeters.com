export default function MenuGrid({ html }) {
  return html`
    <style>
      :host {
        display: grid;
        grid-template-columns: 1fr;
      }

      @media screen and (min-width: 48em) {
        :host {
          grid-template-columns: 1fr 2fr;
        }
      }
    </style>
    <slot></slot>
  `
}
