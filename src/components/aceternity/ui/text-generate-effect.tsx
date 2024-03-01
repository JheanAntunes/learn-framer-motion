'use client'
import { cn } from '@/utils/cn'
import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export const TextGenerateEffect = ({
  words,
  className
}: {
  words: string
  className?: string
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1
      },
      {
        duration: 2,
        delay: stagger(0.2)
      }
    )
  }, [scope, animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent opacity-0 dark:text-white"
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl leading-snug tracking-wide text-transparent dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  )
}
