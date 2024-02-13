'use client'
import { MotionDiv } from '@/components/framer-motion'
import { Button, ButtonProps } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useStoreMenuMobile } from './store/store-menu-mobile'

const ButtonCloseMenuMobile = (props: ButtonProps) => {
  const actionCloseMenuMobile = useStoreMenuMobile(
    (state) => state.toggleMenuMobile
  )
  return (
    <MotionDiv
      className="absolute left-8 top-8 "
      initial={{ opacity: 0, x: '-50' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-50' }}
      transition={{ type: 'spring', duration: 0.7, delay: 0.1 }}
    >
      <Button
        {...props}
        onClick={() => actionCloseMenuMobile()}
        className="border border-pink-300 bg-transparent hover:bg-transparent"
      >
        <X className="text-pink-200" />
      </Button>
    </MotionDiv>
  )
}

export default ButtonCloseMenuMobile
