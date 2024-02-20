import { RefObject, useEffect } from 'react'

type Props = {
  stickeyElement: RefObject<HTMLDivElement>
  handleMouseMove: (e: MouseEvent) => void
  handleMouseOver: () => void
  handleMouseLeave: () => void
}
const useEffectEvents = ({
  stickeyElement,
  handleMouseMove,
  handleMouseOver,
  handleMouseLeave
}: Props) => {
  useEffect(() => {
    //add events
    window.addEventListener('mousemove', handleMouseMove)
    stickeyElement.current?.addEventListener('mouseover', handleMouseOver)
    stickeyElement.current?.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      //clear
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  })
}

export default useEffectEvents
