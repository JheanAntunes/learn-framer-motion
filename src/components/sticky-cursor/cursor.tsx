import { MotionDiv } from '../framer-motion'
import useCursor from './hook/use-cursor'
import { templateOrder } from './template-order'

type CursorProps = {
  stickeyElement: React.RefObject<HTMLDivElement>
}

export const Cursor = ({ stickeyElement }: CursorProps) => {
  const { springX, springY, cursorRef, cursorSize, scaleX, scaleY } = useCursor(
    { stickeyElement }
  )

  return (
    <MotionDiv
      transformTemplate={templateOrder}
      ref={cursorRef}
      animate={{ width: cursorSize, height: cursorSize }}
      style={{ left: springX, top: springY, scaleX: scaleX, scaleY }}
      className="fixed top-0 h-5 w-5 rounded-full bg-zinc-950"
    />
  )
}
