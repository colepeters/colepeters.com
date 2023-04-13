export default function Layout({ html, state }) {
  const { attrs } = state

  const hideFooter = Object.keys(attrs).includes('hide-footer')

  return html`
    <div class='pl0 pr0 pt5 pb5 pl4-md pr4-md p6-lg'>
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
