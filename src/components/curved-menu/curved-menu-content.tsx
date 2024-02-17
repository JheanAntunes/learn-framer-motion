import { MotionDiv } from '../framer-motion'
import { curvedMenuContentMotionVariant } from './curved-menu-motion-variants'

const ease = [0.76, 0, 0.24, 1]
const CurvedMenuMobileContent = ({ children }: React.PropsWithChildren) => {
  return (
    <MotionDiv
      className="fixed left-0 top-0 h-full w-52 border-none bg-zinc-950"
      variants={curvedMenuContentMotionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1, ease }}
    >
      {children}
    </MotionDiv>
  )
}

export default CurvedMenuMobileContent
