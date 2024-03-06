import { Variants } from 'framer-motion'
import { MotionDiv } from '../framer-motion'

const variants: Variants = {
  initial: {
    height: '100%'
  },
  animate: {
    height: '0%',

    transition: {
      duration: 1,
      delay: 3
    }
  }
}

const utilAnimate = (variants: Variants) => ({
  initial: 'initial',
  animate: 'animate',
  variants
})

const YasinLoading = () => {
  const words = [
    {
      text: 'Loading',
      className:
        'bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text tracking-wide text-transparent'
    },
    {
      text: 'The',
      className:
        'bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text tracking-wide text-transparent'
    },
    {
      text: 'Web',
      className:
        'bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text tracking-wide text-transparent'
    }
  ]
  return (
    <MotionDiv
      {...utilAnimate(variants)}
      className="fixed inset-0 z-[999] flex h-full w-full items-center justify-center overflow-hidden bg-neutral-950"
    >
      <h2 className="text-neutral-50">Loading The Web</h2>
    </MotionDiv>
  )
}

export default YasinLoading
