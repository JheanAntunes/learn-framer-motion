'use client'

import { MotionDiv } from '@/components/framer-motion'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const PageAnimationWithScroll = () => {
  // value: 0 a 1
  const refGatilho = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: refGatilho,
    offset: ['start center', 'start start']
  })
  const left = useTransform(scrollYProgress, [0, 1], [0, 700])
  const leftSpring = useSpring(left)
  useEffect(() => {
    scrollYProgress.on('change', (value) => console.log('progress: ', value))
  }, [scrollYProgress])

  return (
    <main className="overflow-x-hidden">
      <section className="h-svh w-svw bg-gradient-to-l from-neutral-50 to-neutral-500" />
      <section ref={refGatilho} className="relative h-svh w-svw bg-emerald-500">
        <MotionDiv
          // ref={refQuadrado}
          style={{ left: leftSpring }}
          transition={{ duration: 0.5 }}
          className="relative h-48 w-48 rounded-3xl bg-yellow-500"
        />
      </section>
      <section className="h-svh w-svw bg-blue-500" />
    </main>
  )
}

const AnimationScrollGsap = () => {
  const refQuadrado = useRef<HTMLDivElement>(null)
  const refGatilho = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!refQuadrado.current && !refGatilho.current) return
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(refQuadrado.current, {
      left: '50%',
      duration: 3,
      scrollTrigger: {
        trigger: refQuadrado.current,
        start: 'top center',
        end: 'center 20%',
        markers: true
      }
    })
  }, [])
  return (
    <>
      <section className="h-svh w-svw bg-gradient-to-l from-neutral-50 to-neutral-500" />
      <section className="relative h-svh w-svw bg-emerald-500">
        <div
          ref={refQuadrado}
          className="relative h-48 w-48 rounded-3xl bg-yellow-500"
        />
      </section>
      <section className="h-svh w-svw bg-blue-500" />
    </>
  )
}

export default PageAnimationWithScroll
