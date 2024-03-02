'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
const Description = () => {
  const phrases = [
    'Los Flamencos National Reserve',
    'is a nature reserve located',
    'in the commune of san Pedro'
  ]
  return (
    <div className="description relative z-20 ml-[10vw] mt-[35vh] text-[3vw] uppercase text-neutral-50">
      {phrases.map((phrase, idx) => {
        return <AnimatedText key={phrase + idx}>{phrase}</AnimatedText>
      })}
    </div>
  )
}

const AnimatedText = ({ children }: React.PropsWithChildren) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(paragraphRef.current, {
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: '0px bottom', //parte inferior da janela de visualização.
        end: 'bottom+=300px bottom',
        scrub: true,
        markers: true
      },
      left: '-200px',
      opacity: 0
    })
  }, [])
  return <p ref={paragraphRef}>{children}</p>
}

export default Description
