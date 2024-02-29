'use client'
import { cn } from '@/utils/cn'
import { Variants, motion } from 'framer-motion'
import React from 'react'

const shorthandAnimate = (variants: Variants, animate?: boolean) => {
  if (!animate) return undefined
  return {
    initial: 'initial',
    animate: 'animate',
    variants
  }
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%'
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%']
    }
  }
  return (
    <div
      className={cn(
        'group relative overflow-hidden p-[4px]',
        containerClassName
      )}
    >
      <motion.div
        style={{
          backgroundSize: animate ? '400% 400%' : undefined
        }}
        {...shorthandAnimate(variants, animate)}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            : undefined
        }
        className={cn(
          'absolute inset-0 z-[1] opacity-60 blur-xl transition  duration-500 group-hover:opacity-100',
          ' bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
        )}
      />
      <motion.div
        {...shorthandAnimate(variants, animate)}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined
        }}
        className={cn(
          'absolute inset-0 z-[1]',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
        )}
      />

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  )
}
