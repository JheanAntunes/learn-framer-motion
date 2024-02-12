'use client'
import { MotionDiv } from '@/components/framer-motion'

const BasicExampleGestures = () => {
  return (
    <MotionDiv
      className="h-80 w-80 rounded-md border border-dashed border-red-600"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.2 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    />
  )
}

export default BasicExampleGestures
