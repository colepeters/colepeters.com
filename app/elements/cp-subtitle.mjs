export default function Title({ html }) {
  return html`
    <style>
      h3 {
        left: -0.0625em;
      }
    </style>
    <h3 class='text2 text3-lg tracking-2 leading1 font-medium relative mb0 mb2-lg'>
      <slot></slot>
    </h3>
  `
}
