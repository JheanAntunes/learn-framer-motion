'use client'

import { useState } from 'react'
import { MotionDiv } from '../framer-motion'
import useMousePosition from './hook/use-mouse-position'
const SvgCursor = () => {
  const { x, y } = useMousePosition()
  const [isMoveParagraph, setIsMoveParagraph] = useState(false)
  const sizeMask = isMoveParagraph ? 400 : 40
  return (
    <MotionDiv
      className="maskCursor"
      animate={{
        WebkitMaskPosition: `${x - sizeMask / 2}px ${y - sizeMask / 2}px`,
        WebkitMaskSize: `${sizeMask}px`
      }}
      transition={{ type: 'tween', ease: 'backOut' }}
    >
      <section className="flex h-svh items-center justify-center">
        <p className="text-7xl">Eu sou um Desenvolvedor</p>
      </section>
    </MotionDiv>
  )
}

export default SvgCursor
