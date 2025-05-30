export default function Title({ html }) {
  return html`
    <style>
      h3 {
        left: -0.0625em;
      }
    </style>
    <h3 class='text2 text3-lg tracking-1 leading1 relative mbe0 mbe3-lg'>
      <slot></slot>
    </h3>
  `
}
