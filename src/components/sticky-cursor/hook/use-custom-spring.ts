import { MotionValue, useSpring } from 'framer-motion'

type Props = {
  x: MotionValue<number>
  y: MotionValue<number>
}

const smothOptions = { stiffness: 300, damping: 20, mass: 0.5 }

const useCustomSpring = ({ x, y }: Props) => {
  const springX = useSpring(x, smothOptions)
  const springY = useSpring(y, smothOptions)
  return {
    springX,
    springY
  }
}

export default useCustomSpring
