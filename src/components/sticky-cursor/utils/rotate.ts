import { AnimationScope, animate } from 'framer-motion'

export type RotateProps = {
  x: number
  y: number
  cursorRef: AnimationScope
}

export const rotate = ({ x, y, cursorRef }: RotateProps) => {
  if (!cursorRef.current) return
  const angle = Math.atan2(y, x)
  animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 })
}
