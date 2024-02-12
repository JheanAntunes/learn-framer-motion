import { MotionDiv, MotionLi } from '@/components/framer-motion'

const BasicExampleVariant = () => {
  const variantList = { hidden: { opacity: 0 } }
  const variantItem = { hidden: { x: -10, opacity: 0 } }
  return (
    <MotionDiv animate="hidden" variants={variantList}>
      <MotionLi variants={variantItem} />
      <MotionLi variants={variantItem} />
      <MotionLi variants={variantItem} />
    </MotionDiv>
  )
}

export default BasicExampleVariant
