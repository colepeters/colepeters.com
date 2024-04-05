export default function Layout({ html, state }) {
  const { attrs } = state

  const hideNav = Object.keys(attrs).includes('hide-nav')

  return html`
    <style>
      .back {
        inline-size: 2em;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        background-color: transparent;
        backdrop-filter: invert(10%);
        color: currentColor;
        inset: var(--space-0);
        transition: backdrop-filter 150ms linear;
      }

      svg {
        opacity: 0.66;
      }

      .back:hover,
      .back:focus {
        backdrop-filter: invert(20%);
      }

      .back:hover svg,
      .back:focus svg {
        opacity: 1;
      }
    </style>
    ${hideNav ? '' : `
      <a title="Return to index" href="/" class="fixed z1 flex align-items-center justify-content-center no-underline back">
        <?xml version="1.0" encoding="UTF-8"?><svg width="16px" height="16px" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
    `}
    <div class='pi0 pb6 pi4-md p6-lg'>
      <cp-container>
        <cp-header></cp-header>
        <main>
          <slot></slot>
        </main>
      </cp-container>
      ${hideNav ? '' : '<cp-footer></cp-footer>'}
    </div>
  `
}
