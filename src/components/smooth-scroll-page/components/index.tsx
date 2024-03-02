'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
const Intro = () => {
  const backgroundImage = useRef<HTMLDivElement>(null)
  const introImage = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top',
        end: '+=250px',
        scrub: true,
        markers: true
      }
    })

    timeLine
      .from(backgroundImage.current, {
        clipPath: 'inset(0%)'
      })
      .to(backgroundImage.current, {
        clipPath: 'inset(15%)'
      })
    timeLine
      .from(introImage.current, { height: '475px' })
      .to(introImage.current, { height: '200px' })
  }, [])
  return (
    <div className="intro">
      <div
        ref={backgroundImage}
        className="backgroundImage absolute top-0 h-[140vh] w-full object-cover brightness-50 transition-all duration-300"
      >
        <Image src="/background.jpeg" fill alt="background image" />
      </div>

      <div className="introContainer mt-[35vh] flex items-center justify-center">
        <div
          data-scroll
          data-scroll-speed="0.3"
          ref={introImage}
          className="introImage relative h-[475px] w-[358px] brightness-75"
        >
          <Image
            src="/intro.png"
            fill
            alt="background image"
            className="object-cover object-top"
          />
        </div>

        <h1 className="absolute z-10 whitespace-nowrap text-[7vw] uppercase text-neutral-50">
          Smooth Scroll
        </h1>
      </div>
    </div>
  )
}

export default Intro
