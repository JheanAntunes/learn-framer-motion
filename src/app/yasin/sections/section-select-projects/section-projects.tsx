'use client'
import { MotionDiv } from '@/components/framer-motion'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CarouselHorizontal from './carousel-horizontal'

const SectionProjects = ({ children }: React.PropsWithChildren) => {
  const refGatilho = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: refGatilho,
    offset: ['start end', 'start start']
  })
  const refGatilhoContainerCarousel = useRef<HTMLDivElement>(null)
  const { scrollYProgress: progressContainerCarousel } = useScroll({
    target: refGatilhoContainerCarousel
  })

  const x = useTransform(progressContainerCarousel, [0, 1], ['1%', '-95%'])

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(10%)', 'inset(0%)']
  )
  const top = useTransform(scrollYProgress, [0, 1], ['0%', '-100px'])
  return (
    <motion.section
      ref={refGatilhoContainerCarousel}
      className="relative h-[300svh]"
    >
      <MotionDiv
        ref={refGatilho}
        className="absolute h-[calc(100%_+_100px)] w-full bg-neutral-950 transition-transform duration-500"
        style={{ top, clipPath }}
      >
        <CarouselHorizontal x={x}>{children}</CarouselHorizontal>
      </MotionDiv>
    </motion.section>
  )
}
export default SectionProjects
