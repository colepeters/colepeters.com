export default function HR({ html }) {
  return html`
    <style>
      :host {
        display: block;
      }
      hr {
        border: none;
        border-top: 2px solid rgba(120, 120, 120, 0.5);
      }
    </style>
    <hr />
  `
}
