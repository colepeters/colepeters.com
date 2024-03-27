export default function HR({ html }) {
  return html`
    <style>
      :host {
        display: block;
        margin-block: var(--space-2);
      }
      hr {
        border: none;
        border-top: 1.5px solid rgba(120, 120, 120, 0.5);
      }
    </style>
    <hr />
  `
}
