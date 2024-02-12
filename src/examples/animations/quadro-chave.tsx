import { MotionDiv } from '@/components/framer-motion'

/**
 *
 * @returns
 * @description eu posso passar uma matriz para as propriedades de animações. A cada valor da matriz ocorre animação com o valor,
 *  exemplo: animate={scale:[1,2,3,4]}
 */
export const QuadroChave = () => (
  <MotionDiv
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%']
    }}
  />
)

export default QuadroChave
