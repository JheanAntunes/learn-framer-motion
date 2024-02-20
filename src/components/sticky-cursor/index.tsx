'use client'
import { useRef } from 'react'
import { ButtonStickyCursor } from './button-sticky-cursor'
import { Cursor } from './cursor'

const StickyCursor = () => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div>
      <div className="fixed z-[1] flex w-full justify-end p-8 mix-blend-difference">
        <ButtonStickyCursor ref={ref} />
      </div>
      <Cursor stickeyElement={ref} />
    </div>
  )
}
export default StickyCursor
