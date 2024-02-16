import Link from 'next/link'
import { dataLinks } from '../../examples/menu-mobile/data-links'

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
              <Link href={href}>{content}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
