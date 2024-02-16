'use client'
import { MotionDiv } from '@/components/framer-motion'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function TransitionPage({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <MotionDiv key={pathname}>
        {children}
        <MotionDiv
          className="slide-in absolute left-0 top-0 h-screen w-full origin-bottom bg-zinc-950"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <MotionDiv
          className="slide-out absolute left-0 top-0 h-screen w-full origin-top bg-zinc-950"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </MotionDiv>
    </AnimatePresence>
  )
}
