import { MotionLi } from '@/components/framer-motion'
import { Variants } from 'framer-motion'
import Link from 'next/link'
import { dataLinks } from './data-links'
const variantsPerspective: Variants = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20
  },
  enter: (custom: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.8, delay: 0.4 + custom * 0.1 },
      delay: 0.5 + custom * 0.1
    }
  }),
  exit: { opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
}

const Nav = () => {
  return (
    <nav className="nav h-screen py-24 pb-14 pl-10 pr-10">
      <div className="body text-5xl">
        <ul className="space-y-5">
          {dataLinks.map(({ href, content }, i) => {
            return (
              <div key={href + content} className="linkContainer">
                <MotionLi
                  custom={i}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={variantsPerspective}
                >
                  <Link href={href}>{content}</Link>
                </MotionLi>
              </div>
            )
          })}
        </ul>
      </div>
      <div className="foooter"></div>
    </nav>
  )
}

export default Nav
