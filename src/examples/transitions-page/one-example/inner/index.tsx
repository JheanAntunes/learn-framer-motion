'use client'

import { MotionDiv } from '@/components/framer-motion'
import { Variants } from 'framer-motion'
import { anin } from '../../util/ani'

const Inner = ({ children }: React.PropsWithChildren) => {
  // const pathname = usePathname()

  const opacity: Variants = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 2
      }
    }
  }

  const slide: Variants = {
    initial: {
      height: '100vh'
    },
    enter: {
      height: '0px',
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        type: 'tween'
      }
    }
  }

  // const perspective: Variants = {
  //   initial: {
  //     y: 0,
  //     scale: 0
  //   },
  //   enter: {
  //     y: -100,
  //     scale: 0.9,
  //     transition: {
  //       duration: 1,
  //       ease: [0.76, 0, 0.24, 1]
  //     }
  //   }
  // }

  return (
    <MotionDiv className="inner">
      <MotionDiv
        {...anin(slide)}
        className="slide bg-white-500 fixed left-0 top-0 h-screen w-screen"
      />
      <MotionDiv {...anin(opacity)} className="page">
        {children}
      </MotionDiv>
    </MotionDiv>
  )
}

export default Inner
