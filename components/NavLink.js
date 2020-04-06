import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const isActivePage = props => props.pathname === props.href

const CustomLink = styled.a`
  font-weight: ${props => (isActivePage(props) ? '600' : '400')};
  text-decoration: ${props => (isActivePage(props) ? 'none' : 'underline')};
  cursor: ${props => (isActivePage(props) ? 'initial' : 'pointer')};
  padding: ${props => props.theme.space[2]} 0;
  pointer-events: ${props => (isActivePage(props) ? 'none' : 'auto')};
`
CustomLink.displayName = 'CustomLink'

export default function NavLink({ children, href }) {
  const { pathname } = useRouter()

  return (
    <Link href={href} passHref>
      <CustomLink pathname={pathname}>{children}</CustomLink>
    </Link>
  )
}
