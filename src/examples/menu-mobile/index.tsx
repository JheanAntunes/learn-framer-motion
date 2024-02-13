'use client'
import { AnimatePresence } from 'framer-motion'
import ButtonOpenMenuMobile from './button-open-menu-mobile'
import { MenuMobileUI } from './menu-mobile'
import { useStoreMenuMobile } from './store/store-menu-mobile'

const MenuMobile = () => {
  const stateMenuMobile = useStoreMenuMobile((state) => state.isMenuMobile)
  const toggleMenuMobile = useStoreMenuMobile((state) => state.toggleMenuMobile)
  return (
    <>
      <ButtonOpenMenuMobile onClick={() => toggleMenuMobile} />
      {/* render condicional */}
      {/* {isMenuMobile && <MenuMobileUI />} */}
      <AnimatePresence>{stateMenuMobile && <MenuMobileUI />}</AnimatePresence>
    </>
  )
}

export default MenuMobile
