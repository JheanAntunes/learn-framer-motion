'use client'

import { MotionDiv } from '@/components/framer-motion'
import { useMotionValue, useTransform } from 'framer-motion'

const ExampleSimpleHookUseTransform = () => {
  const x = useMotionValue(0)
  // State animation -> value
  // Intervalo de entrada -> input
  // Intervalo de saída -> output
  // opções
  const background = useTransform(x, [-1, 0, 1], ['pink', 'gray', 'green'])
  return (
    <MotionDiv
      className="h-4 w-4 rounded"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, background }}
    ></MotionDiv>
  )
}

export default ExampleHookUseTransform
