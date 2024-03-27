export default function AlbumGrid({ html }) {
  return html`
    <div class='grid col-3-md col-2-lg gap0 gap4-md gap5-lg'>
      <div class='order-1 order-2-md col-span-1-md'>
        <slot name='media'></slot>
      </div>
      <article class='order-2 order-1-md col-span-2-md col-span-1-lg'>
        <slot name='text'></slot>
      </article>
    </div>
  `
}
