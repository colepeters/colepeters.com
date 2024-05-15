export default function Title({ html }) {
  return html`
    <style>
      h2 {
        left: -0.0625em;
        font-feature-settings: "ss03";
      }
    </style>
    <h2 class='text4 text6-lg tracking-2 leading1 relative mbe0 mbe4-lg'>
      <slot></slot>
    </h2>
  `
}
