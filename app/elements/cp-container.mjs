export default function Container({ html }) {
  return html`
    <style>
      :host {
        display: block;
        max-width: 1280px;
        margin: auto;
      }
    </style>
    <slot></slot>
  `
}
