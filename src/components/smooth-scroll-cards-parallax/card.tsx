'use client'
import { MotionValue, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MotionDiv } from '../framer-motion'
import { DataProject } from './data'

type CardProps = {
  data: DataProject
  i: number
  targetScale: number
  range: number[]
  progress: MotionValue<number>
}
const Card = ({ data, i, range, targetScale, progress }: CardProps) => {
  const { title, description, color } = data
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])
  return (
    <section
      ref={containerRef}
      className="cardContainer sticky top-[10vh] flex h-screen items-center justify-center"
    >
      <MotionDiv
        className="card relative -top-10 grid h-[500px] w-[1000px] grid-cols-2 rounded-3xl"
        style={{ background: color, scale, top: `calc(-10% + ${i * 25}px)` }}
      >
        <div className="space-y-2 p-8">
          <h1 className="text-5xl">{title}</h1>
          <p>{description}</p>
        </div>
        <MotionDiv
          style={{ scale: imageScale }}
          className="relative h-full w-[60%] overflow-hidden rounded-3xl"
        >
          <div className="h-full w-full">
            <div className="bg-orange-600 object-cover">{/* img */}</div>
          </div>
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}

export default Card
