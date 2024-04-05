export default function Title({ html }) {
  return html`
    <style>
      h2 {
        left: -0.0625em;
      }
    </style>
    <h2 class='text4 text5-lg tracking-2 leading1 font-medium relative mb0 mb2-lg'>
      <slot></slot>
    </h2>
  `
}
