import { MotionDiv } from '@/components/framer-motion'
import { MotionValue } from 'framer-motion'

const CarouselHorizontal = ({
  x,
  children
}: React.PropsWithChildren<{ x: MotionValue<string> }>) => {
  return (
    <div className="sticky top-0 flex h-svh items-center overflow-hidden">
      <MotionDiv style={{ x }} className="relative flex gap-8">
        {children}
      </MotionDiv>
    </div>
  )
}

export default CarouselHorizontal
