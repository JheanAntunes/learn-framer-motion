import Link from 'next/link'
import { dataLinks } from '../../examples/menu-mobile/data-links'
import { MotionDivWithRef } from '../animation-icons/list-icons'

const Header = () => {
  return (
    <header className="px-8">
      <nav className="flex justify-between">
        {/* Logo */}
        <Link href="/">JheanAntunesLopes@gmail.com</Link>
        {/* menu */}
        <ul className="flex items-center gap-8">
          {dataLinks.map(({ href, content }) => (
            <li key={href + content}>
              <MotionDivWithRef>
                <Link href={href}>{content}</Link>
              </MotionDivWithRef>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
