import { useMotionValue } from 'framer-motion'

const useCustomScale = () => {
  const scale = {
    scaleX: useMotionValue(1),
    scaleY: useMotionValue(1)
  }
  return scale
}

export default useCustomScale
