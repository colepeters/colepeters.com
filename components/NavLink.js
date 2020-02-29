import Link from 'next/Link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const CustomLink = styled.a`
  font-weight: ${props => (props.pathname === props.href ? '600' : '400')};
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
