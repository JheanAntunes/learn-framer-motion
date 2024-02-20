import { useAnimate, useMotionValue } from 'framer-motion'
import { RefObject, useState } from 'react'
import AnimationScale from '../utils/animation-scale'
import { rotate } from '../utils/rotate'
import useCustomScale from './use-custom-scale'
import useCustomSpring from './use-custom-spring'
import useEffectEvents from './use-effect-events'

type Props = {
  stickeyElement: RefObject<HTMLDivElement>
}
const useCursor = ({ stickeyElement }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  const [cursorRef, animate] = useAnimate()
  const { scaleX, scaleY } = useCustomScale()
  const cursorSize = isHovered ? 60 : 20

  const positionCursor = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  //handles
  const handleMouseMove = (e: MouseEvent) => {
    if (!stickeyElement.current) return
    const { clientX, clientY } = e

    const { left, width, top, height } =
      stickeyElement.current.getBoundingClientRect()

    const center = { x: left + width / 2, y: top + height / 2 }
    const distance = { x: e.clientX - center.x, y: e.clientY - center.y }

    if (!isHovered) {
      //animation custom cursor
      positionCursor.x.set(clientX - cursorSize / 2)
      positionCursor.y.set(clientY - cursorSize / 2)
      //break
      return
    }
    //rotation
    rotate({ cursorRef, x: distance.x, y: distance.y })
    // a distância absoluta entre o cursor personalizado e o ponteiro.
    AnimationScale({ distance, width, height, scaleX, scaleY })
    positionCursor.x.set(center.x - cursorSize / 2 + distance.x * 0.1)
    positionCursor.y.set(center.y - cursorSize / 2 + distance.y * 0.1)
  }

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (!cursorRef.current) return
    animate(
      cursorRef.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1, type: 'spring' }
    )
  }

  const { springX, springY } = useCustomSpring(positionCursor)

  useEffectEvents({
    handleMouseMove,
    handleMouseOver,
    handleMouseLeave,
    stickeyElement
  })

  return {
    springX,
    springY,
    cursorRef,
    cursorSize,
    scaleX,
    scaleY
  }
}

export default useCursor
