import { MotionDiv } from '@/components/framer-motion'
import { Variants } from 'framer-motion'
import { anin } from '../util/ani'

const Stairs = ({ children }: React.PropsWithChildren) => {
  //Número de Colunas
  const nbOfColumns = 5
  //Criou um array de colunas
  const columns = Array.from({ length: nbOfColumns }).map((_, i) => i)

  const expand = (interval: number): Variants => {
    const variant: Variants = {
      initial: {
        top: 0
      },
      enter: {
        top: '100%',
        transition: {
          duration: 0.4,
          delay: 0.05 * interval
        }
      }
    }
    return variant
  }

  return (
    <div className="page stairs">
      <div className="transition-container pointer-events-none fixed left-0 top-0 flex h-screen w-screen">
        {columns.map((_, i) => {
          return (
            <MotionDiv
              key={i}
              {...anin(expand(nbOfColumns - i))}
              className="relative h-full w-full bg-zinc-950"
            />
          )
        })}
      </div>
      {children}
    </div>
  )
}

export default Stairs
