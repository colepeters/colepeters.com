export default function Layout({ html, state }) {
  const { attrs } = state

  const hideFooter = Object.keys(attrs).includes('hide-footer')

  return html`
    <div class='pi0 pb5 pi4-md p6-lg'>
      <cp-container>
        <cp-header></cp-header>
        <main>
          <slot></slot>
        </main>
      </cp-container>
      ${hideFooter ? '' : '<cp-footer></cp-footer>'}
    </div>
  `
}
