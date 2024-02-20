import { forwardRef } from 'react'
import { MotionDivWithRef } from '../animation-icons/list-icons'
import { Button, ButtonProps } from '../ui/button'

type ButtonStickyCursorProps = ButtonProps

export const ButtonStickyCursor = forwardRef<
  HTMLDivElement,
  ButtonStickyCursorProps
>((props, ref) => (
  <MotionDivWithRef>
    <Button
      {...props}
      size="icon"
      className="pointer-events-none relative flex cursor-pointer flex-col gap-1 rounded-full bg-transparent mix-blend-difference before:block
    before:h-0.5 before:w-8 before:bg-white before:content-[''] after:block 
    after:h-0.5 after:w-8 after:bg-white after:content-[''] hover:bg-transparent"
    >
      <div
        ref={ref}
        className="bounds pointer-events-auto absolute left-0 top-0 h-full w-full hover:scale-[3]"
      />
      {/* <Menu /> */}
    </Button>
  </MotionDivWithRef>
))

ButtonStickyCursor.displayName = 'ButtonStickyCursor'
