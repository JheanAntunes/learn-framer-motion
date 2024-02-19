'use client'
import { Apple, BotIcon, Linkedin } from 'lucide-react'
import { useRef, useState } from 'react'
import { MotionDiv } from '../framer-motion'

const ListIcons = () => {
  const arrayIcons = [
    {
      key: 'Apple',
      Icon: <Apple />
    },
    {
      key: 'Linkedin',
      Icon: <Linkedin />
    },
    {
      key: 'bot',
      Icon: <BotIcon />
    }
  ]

  return (
    <div className="flex gap-5">
      {arrayIcons.map(({ key, Icon }) => (
        <MotionDivWithRef key={key}>{Icon}</MotionDivWithRef>
      ))}
    </div>
  )
}

export const MotionDivWithRef = ({ children }: React.PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.1, y: y * 0.1 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <MotionDiv
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      animate={{ x, y }}
    >
      {children}
    </MotionDiv>
  )
}

export default ListIcons
