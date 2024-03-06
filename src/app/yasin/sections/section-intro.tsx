'use client'
import { TextGenerateEffect } from '@/components/aceternity/ui/text-generate-effect'
import { MotionDiv } from '@/components/framer-motion'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Header from '../header'

const SectionIntro = () => {
  const refGatilho = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: refGatilho
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const top = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const scaleSpring = useSpring(scale)
  return (
    <section>
      <MotionDiv ref={refGatilho} className="container h-[111svh]">
        <Header />
        <MotionDiv
          className="relative -z-10 space-y-2 transition-transform duration-500"
          style={{ top }}
        >
          <motion.h1
            style={{ scale: scaleSpring }}
            className="relative space-y-2 bg-gradient-to-b from-neutral-50 to-neutral-400  bg-clip-text font-medium text-transparent"
          >
            <div className="text-center font-serif text-9xl leading-none tracking-tight">
              {' '}
              I&rsquo;m Yasin Genc
            </div>
            <div className="text-center font-serif text-9xl leading-none tracking-tight">
              Creative Frontend Developer.
            </div>
          </motion.h1>
          <MotionDiv style={{ scale: scaleSpring }} className="text-center">
            <TextGenerateEffect words="I develop accessible, responsive, interactive, and animated websites with a strong focus on performance." />
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}

export default SectionIntro
