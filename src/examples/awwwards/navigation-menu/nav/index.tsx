'use client'
import { MotionDiv, MotionUl } from '@/components/framer-motion'
import { Button } from '@/components/ui/button'
import { AnimatePresence, Variants, useAnimate } from 'framer-motion'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { dataLinks } from '../../side-menu/nav/data-links'

const shorthandAnimate = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants
  }
}

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] }

const variantsContainerMenu: Variants = {
  initial: { height: 0 },
  enter: {
    height: 320,
    transition
  },
  exit: {
    height: 0,
    transition
  }
}

const fundo: Variants = {
  initial: { height: 0 },
  enter: {
    height: '100%',
    transition: { ...transition, ease: [0.61, 1, 0.88, 1] }
  },
  exit: {
    height: '0%',
    transition
  }
}

const variantsListItem: Variants = {
  initial: { top: 60, opacity: 0 },
  enter: {
    top: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
  },
  exit: {
    top: 60,
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

const Nav = () => {
  const [stateIsMenu, setStateIsMenu] = useState(false)
  const toggleMenu = () => setStateIsMenu((statePrevious) => !statePrevious)
  const [refList, animate] = useAnimate()
  return (
    <nav className="relative w-full bg-orange-200 text-2xl uppercase">
      <div className="flex h-20 items-center justify-between px-8">
        <Link href="/">Oliver</Link>
        <Button className="group border-orange-200 bg-transparent text-zinc-950 hover:bg-transparent">
          <div
            className="flex items-center justify-center gap-1"
            onClick={toggleMenu}
          >
            <Menu />
            Menu
          </div>
        </Button>
        <div className="flex gap-5">
          <Link href="#">Shop</Link>
          <Link href="#">Cart(0)</Link>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {stateIsMenu && (
          <MotionDiv
            className="absolute w-full overflow-hidden bg-orange-200"
            {...shorthandAnimate(variantsContainerMenu)}
          >
            <MotionUl className="flex flex-wrap gap-5 p-8" ref={refList}>
              {dataLinks.map(({ href, content }, i) => (
                <li
                  key={href + content}
                  onMouseOver={(e) => {
                    e.currentTarget.dataset.hover = 'true'
                    animate('li', { filter: 'blur(4px)' })
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.dataset.hover = 'false'
                    animate('li', { filter: 'blur(0px)' })
                  }}
                  className="overflow-hidden transition-all data-[hover=true]:!blur-none"
                >
                  <MotionDiv
                    custom={i}
                    className="relative"
                    {...shorthandAnimate(variantsListItem)}
                    data-hover="false"
                  >
                    <Link className="text-5xl lg:text-6xl" href={href}>
                      {content}
                    </Link>
                  </MotionDiv>
                </li>
              ))}
            </MotionUl>
            <MotionDiv
              className="pointer-events-none fixed top-0 -z-10 w-full bg-orange-100"
              {...shorthandAnimate(fundo)}
            />
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Nav
