import { MotionDiv, MotionLi, MotionUl } from '@/components/framer-motion'
import Link from 'next/link'
import ButtonCloseMenuMobile from './button-close-menu-mobile'
import { dataLinks } from './data-links'
import { useStoreMenuMobile } from './store/store-menu-mobile'
import {
  variantMenuContent,
  variantMenuList,
  variantMenuWrapper
} from './variant-mobile'

export const MenuMobileUI = () => {
  const closeMenuMobile = useStoreMenuMobile((state) => state.closeMenuMobile)
  return (
    <MotionDiv
      variants={variantMenuWrapper}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
      onClick={() => closeMenuMobile()}
      className="fixed inset-0 z-20 backdrop-blur"
    >
      <MotionDiv
        variants={variantMenuContent}
        transition={{ duration: 0.7 }}
        className="absolute inset-y-0 left-0 z-30 bg-pink-600 px-8 py-20"
      >
        <ButtonCloseMenuMobile />
        <MotionUl
          className="grid gap-5"
          variants={variantMenuList}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {dataLinks.map(({ href, content }, index) => (
            <MotionLi
              key={href + content + index}
              className="rounded border border-pink-300 p-1 py-2"
              onClick={(e) => {
                if (e.currentTarget === e.target) closeMenuMobile()
              }}
            >
              <Link href={href}>{content}</Link>
            </MotionLi>
          ))}
        </MotionUl>
      </MotionDiv>
    </MotionDiv>
  )
}
