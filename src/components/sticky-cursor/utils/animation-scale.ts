import { MotionValue, transform } from 'framer-motion'

type Distance = {
  x: number
  y: number
}

type Props = {
  width: number
  height: number
  distance: Distance
  scaleX: MotionValue<number>
  scaleY: MotionValue<number>
}
const AnimationScale = ({ distance, width, height, scaleX, scaleY }: Props) => {
  const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y))
  const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3])
  const newScaleY = transform(absDistance, [0, height / 2], [1, 0.8])

  scaleX.set(newScaleX)
  scaleY.set(newScaleY)
}

export default AnimationScale
