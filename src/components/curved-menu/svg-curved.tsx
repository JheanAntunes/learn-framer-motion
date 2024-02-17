'use client'

import { motion } from 'framer-motion'

const SvgCurved = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

  const pathAnimation = {
    initial: {
      d: initialPath
    },
    animate: {
      d: targetPath
    },
    exit: {
      d: initialPath
    }
  }

  return (
    <svg className="fixed left-[100px] top-0 h-screen w-[100px] rotate-180 fill-zinc-950 stroke-none">
      <motion.path
        variants={pathAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </svg>
  )
}

export default SvgCurved
