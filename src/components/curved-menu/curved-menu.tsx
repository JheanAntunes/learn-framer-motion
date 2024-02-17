import { dataLinks } from '@/examples/menu-mobile/data-links'
import Link from 'next/link'
import { MotionLi } from '../framer-motion'
import CurvedMenuMobileContent from './curved-menu-content'

const ease = [0.76, 0, 0.24, 1]
const CurvedMenu = () => {
  return (
    <CurvedMenuMobileContent>
      <ul className="grid gap-2 px-8 pt-20 text-lg text-zinc-50">
        {dataLinks.map(({ href, content }) => (
          <MotionLi
            key={href + content}
            initial={{ x: '-80px' }}
            animate={{
              x: 0
            }}
            exit={{ x: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <Link href={href} className="block capitalize">
              {content}
            </Link>
          </MotionLi>
        ))}
      </ul>
    </CurvedMenuMobileContent>
  )
}

export default CurvedMenu
