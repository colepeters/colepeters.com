import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const isActivePage = (props) => props.pathname === props.href

const CustomLink = styled.a`
  font-weight: ${(props) => (isActivePage(props) ? '700' : '400')};
  text-decoration: ${(props) => (isActivePage(props) ? 'none' : 'underline')};
  cursor: ${(props) => (isActivePage(props) ? 'initial' : 'pointer')};
  padding: ${(props) => props.theme.space[2]} 0;
  pointer-events: ${(props) => (isActivePage(props) ? 'none' : 'auto')};
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

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}
