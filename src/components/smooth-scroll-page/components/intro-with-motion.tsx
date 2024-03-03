'use client'
import { MotionDiv } from '@/components/framer-motion'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const IntroWithAnimationFramer = () => {
  const backgroundImage = useRef<HTMLDivElement>(null)
  const introImage = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: backgroundImage,
    offset: ['end center', '90% 90%']
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const height = useTransform(scrollYProgress, [0, 1], [240, 475])
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1])
  const scaleSpring = useSpring(scale, {
    stiffness: 150,
    damping: 10,
    mass: 1,
    duration: 0.1
  })
  return (
    <div className="intro">
      <MotionDiv
        ref={backgroundImage}
        style={{ opacity, scale: scaleSpring }}
        className="backgroundImage absolute top-0 h-[140vh] w-full object-cover brightness-50 transition-all duration-300"
      >
        <Image src="/background.jpeg" fill alt="background image" />
      </MotionDiv>

      <div className="introContainer mt-[35vh] flex items-center justify-center">
        <MotionDiv
          data-scroll
          data-scroll-speed="0.3"
          ref={introImage}
          className="introImage relative h-[475px] w-[358px] brightness-75"
          style={{ height }}
        >
          <Image
            src="/intro.png"
            fill
            alt="background image"
            className="object-cover object-top"
          />
        </MotionDiv>

        <h1 className="absolute z-10 whitespace-nowrap text-[7vw] uppercase text-neutral-50">
          Smooth Scroll
        </h1>
      </div>
    </div>
  )
}

export default IntroWithAnimationFramer
