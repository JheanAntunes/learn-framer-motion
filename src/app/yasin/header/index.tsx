import { badgeVariants } from '@/components/ui/badge'
import { CircleDotIcon } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between py-8">
        <Link
          href={'#'}
          className="bg-gradient-to-b from-neutral-50  to-neutral-400 bg-clip-text text-xl font-medium text-transparent"
        >
          LOGO
        </Link>
        <Link
          href={'#'}
          className="bg-gradient-to-b from-neutral-50 to-neutral-400  bg-clip-text text-xl font-medium text-transparent"
        >
          TIME
        </Link>
        <Link
          href={'#'}
          className={badgeVariants({
            variant: 'outline',
            className:
              'flex gap-1 bg-gradient-to-b from-neutral-50 to-neutral-400  bg-clip-text text-xl font-medium uppercase text-transparent'
          })}
        >
          <CircleDotIcon className="animate-pulse text-emerald-500" />
          to open work
        </Link>
      </nav>
    </header>
  )
}

export default Header
