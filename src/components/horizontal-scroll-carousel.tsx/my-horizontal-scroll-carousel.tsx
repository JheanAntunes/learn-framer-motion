'use client'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MotionDiv } from '../framer-motion'

const MyHorizontalScrollCarousel = () => {
  const refGatilho = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: refGatilho
  })

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])

  return (
    <div>
      <div className="h-96 bg-slate-400">SCROLL DOWN</div>
      <section className="bg-neutral-100">
        <div ref={refGatilho} className="relative h-[300svh] w-full">
          {/* Gatilho */}
          <div className="sticky top-0 flex h-svh items-center overflow-hidden">
            <MotionDiv style={{ x }} className="flex gap-5">
              {cards.map((card) => {
                return (
                  <div
                    className="h-[450px] w-[450px] overflow-hidden rounded bg-emerald-400"
                    key={card.id}
                  >
                    <h3 className="text-3xl">{card.title}</h3>
                  </div>
                )
              })}
            </MotionDiv>
          </div>
        </div>
      </section>
      <div className="h-96 bg-slate-400">SCROLL UP</div>
    </div>
  )
}

export default MyHorizontalScrollCarousel

type Card = {
  url: string
  title: string
  id: number
}
const cards: Card[] = [
  {
    url: '/imgs/abstract/1.jpg',
    title: 'Title 1',
    id: 1
  },
  {
    url: '/imgs/abstract/2.jpg',
    title: 'Title 2',
    id: 2
  },
  {
    url: '/imgs/abstract/3.jpg',
    title: 'Title 3',
    id: 3
  },
  {
    url: '/imgs/abstract/4.jpg',
    title: 'Title 4',
    id: 4
  },
  {
    url: '/imgs/abstract/5.jpg',
    title: 'Title 5',
    id: 5
  },
  {
    url: '/imgs/abstract/6.jpg',
    title: 'Title 6',
    id: 6
  },
  {
    url: '/imgs/abstract/7.jpg',
    title: 'Title 7',
    id: 7
  }
]
