'use client'
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import Card from './card'
import { dataProjects } from './data'

const SmoothScrollCardsParallax = () => {
  //containerRef: Container dos elemementos que cada elemento ocupa 100% da viewport
  const containerRef = useRef<HTMLDivElement>(null)
  //Hook useScroll: rastrear a rolagem
  //arg: target: o elemento que deseja rastrear a rolagem (opcional)
  //arg: offset:['Quando começo rastrear', 'Quando devo parar de rastrear']
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={containerRef} className="main relative">
      <h1 className="mb-8 text-center">Projetos</h1>
      {dataProjects.map((dataCard, i) => {
        //animação do scale: Cada elemento vai conter um scale diferente.
        const targetScale = 1 - (dataProjects.length - i) * 0.05
        //index 0: intervalo (entrada ficticia, não vou utilizar.), index 1: (animar elemento quando o container fixar no topo)
        const intervalo = [i * 0.2, 1]
        return (
          <Card
            key={dataCard.title}
            i={i}
            data={dataCard}
            range={intervalo}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        )
      })}
    </div>
  )
}

export default SmoothScrollCardsParallax
