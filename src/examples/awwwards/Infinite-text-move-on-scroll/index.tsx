'use client'
import ImageBackground from '@/components/assets/background.jpg'
import { MotionDiv } from '@/components/framer-motion'
import { useAnimate, useInView, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const InfiniteTextMoveOnScroll = () => {
  const { scrollY } = useScroll()
  const [slider, animate] = useAnimate()
  const isInView = useInView(slider)
  const debounceAnimate = useDebouncedCallback((direction: string) => {
    animate(
      slider.current,
      { x: direction },
      {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 3,
        repeatDelay: 0.1,
        ease: [0.5, 1, 0.89, 1],
        type: 'tween'
      }
    )
  }, 100)
  useEffect(() => {
    let valuePreviousScrollY = 0
    let direction = '100%'
    if (!isInView) {
      return () => {
        scrollY.clearListeners()
      }
    }
    scrollY.on('change', (value) => {
      if (value > valuePreviousScrollY) {
        valuePreviousScrollY = value
        if (direction === '100%') return
        direction = '100%'
        debounceAnimate(direction)
      } else {
        valuePreviousScrollY = value
        if (direction === '-100%') return
        direction = '-100%'
        debounceAnimate(direction)
      }
    })
    return () => {
      scrollY.clearListeners()
    }
  }, [isInView, slider, animate, debounceAnimate, scrollY])

  return (
    <div className="relative mb-[100vh] h-screen object-cover">
      <Image
        src={ImageBackground}
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="sliderContainer absolute bottom-32">
        <MotionDiv
          // animate={{ x: '-100%' }}
          ref={slider}
          // transition={{
          //   repeat: Infinity,
          //   repeatType: 'loop',
          //   duration: 3,
          //   repeatDelay: 0.1,
          //   ease: [0.5, 1, 0.89, 1],
          //   type: 'tween'
          // }}
          className="slider relative flex w-full whitespace-nowrap text-9xl text-white"
        >
          <p>Freelance Photograph - </p>
          <p className="absolute left-full">Freelance Photograph -</p>
          <p className="absolute -left-full">Freelance Photograph -</p>
        </MotionDiv>
      </div>
    </div>
  )
}

export default InfiniteTextMoveOnScroll
