import css from 'next/css'

const font = {
  sans: `-apple-system, BlinkMacSystemFont, Avenir, 'Segoe UI', 'Fira Sans', 'Helvetica Neue', sans-serif`,
  serif: `Charter, Garamond, Georgia, serif`
}

export const sansSerif = css({ fontFamily: font.sans })
export const serif = css({ fontFamily: font.serif })
