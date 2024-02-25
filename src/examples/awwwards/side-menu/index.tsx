'use client'
import { MotionDiv } from '@/components/framer-motion'
import { AnimatePresence, Variants } from 'framer-motion'
import { useState } from 'react'
import Nav from './nav'

const variants: Variants = {
  open: {
    height: 650,
    width: 480,
    top: '-32px',
    left: '-32px',
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    height: 40,
    width: 100,
    top: '0px',
    left: '0px',
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
  }
}

const SideMenu = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const toggleMenu = () => {
    setIsActiveMenu((stateMenu) => !stateMenu)
  }
  return (
    <div className="relative left-16 top-10 h-full w-full">
      <MotionDiv
        className="menu relative left-8 h-[650px] w-[480px] rounded-3xl bg-lime-400"
        variants={variants}
        initial="closed"
        animate={isActiveMenu ? 'open' : 'closed'}
      >
        <AnimatePresence>{isActiveMenu && <Nav />}</AnimatePresence>
      </MotionDiv>
      <div
        onClick={() => toggleMenu()}
        className="button absolute left-0 top-0 h-10 w-24 cursor-pointer overflow-hidden rounded-3xl"
      >
        <MotionDiv
          className="slide relative h-full w-full"
          animate={{
            top: isActiveMenu ? '-100%' : '0%'
          }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="el group flex h-full w-full items-center justify-center bg-lime-400 uppercase">
            <p>Menu</p>
          </div>
          <div className="el group absolute top-full flex h-full w-full items-center justify-center bg-zinc-950 uppercase text-zinc-50">
            <p>Close</p>
          </div>
        </MotionDiv>
      </div>
    </div>
  )
}

export default SideMenu
