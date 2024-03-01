'use client'
import { cn } from '@/lib/utils'
import { Boxes } from '../ui/background-boxes'
import { TypewriterEffectSmooth } from '../ui/typewriter-effect'

export function BackgroundBoxesDemo() {
  const words = [
    {
      text: 'Tailwinds',
      className:
        'relative z-20 text-xl pointer-events-none text-white md:text-4xl'
    },
    {
      text: 'is',
      className:
        'relative z-20 text-xl pointer-events-none text-white md:text-4xl'
    },
    {
      text: 'Awesome',
      className:
        'relative z-20 text-xl pointer-events-none text-white md:text-4xl'
    }
  ]
  return (
    <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />

      <Boxes />
      <h1
        className={cn(
          'pointer-events-none relative z-20 text-xl text-white md:text-4xl'
        )}
      >
        <TypewriterEffectSmooth words={words} />
      </h1>
      <p className="pointer-events-none relative mt-2 text-center text-neutral-300">
        Framer motion is the best animation library ngl
      </p>
    </div>
  )
}
