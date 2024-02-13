'use client'
import { Button, ButtonProps } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useStoreMenuMobile } from './store/store-menu-mobile'

const ButtonOpenMenuMobile = (props: ButtonProps) => {
  const actionOpenMenuMobile = useStoreMenuMobile(
    (state) => state.toggleMenuMobile
  )
  return (
    <Button
      {...props}
      className="group rounded-full bg-pink-500 hover:bg-pink-600"
      onClick={() => actionOpenMenuMobile()}
    >
      <Menu className="rounded-full group-hover:text-pink-200" />
    </Button>
  )
}

export default ButtonOpenMenuMobile
