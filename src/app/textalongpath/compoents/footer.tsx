'use client'

import { MotionDiv } from '@/components/framer-motion'
import { MotionValue, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const Footer = () => {
  const container = useRef<HTMLDivElement>(null)
  const texts = useRef<SVGTextPathElement[]>([])
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  })
  // intrução: gatilho, janela de visualização.
  // start end === topo gatilho entra na parte inferior da janela de visualização.

  useEffect(() => {
    scrollYProgress.on('change', (e) =>
      texts.current.forEach((text, i) => {
        text.setAttribute('startOffset', -40 + i * 40 + e * 40 + '%')
      })
    )
  }, [scrollYProgress])

  return (
    <div ref={container} className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 250 90"
        className="mb-40"
      >
        <path
          id="Layer_1"
          style={{ strokeMiterlimit: 10, fill: 'none' }}
          className="cls-1 fill-none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-[6px] uppercase" style={{ fill: 'red' }}>
          {[...Array(3)].map((_, i) => (
            <textPath
              key={i}
              ref={(ref) => (texts.current[i] = ref!)}
              href="#Layer_1"
              startOffset={i * 40 + '%'}
            >
              Curabitur mattis efficitur velit
            </textPath>
          ))}
        </text>
      </svg>
      <Logo scrollProgress={scrollYProgress} />
    </div>
  )
}

type LogoProps = {
  scrollProgress: MotionValue<number>
}

const Logo = ({ scrollProgress }: LogoProps) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0])

  return (
    <div className="h-[250px] overflow-hidden bg-neutral-950">
      <MotionDiv
        style={{ y }}
        className="flex h-full items-center justify-center gap-5"
      >
        {[...Array(5)].map((_, i) => (
          <Image
            width={80}
            height={80}
            key={'img' + i}
            src={`/${i + 1}.jpg`}
            alt=""
          />
        ))}
      </MotionDiv>
    </div>
  )
}
export default Footer
