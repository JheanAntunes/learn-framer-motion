'use client'

import { smothOptions } from '@/components/sticky-cursor/hook/use-custom-spring'
import { cn } from '@/utils/cn'
import { Variant, useAnimate } from 'framer-motion'
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

//type para o container externos
type CardContainerProps = React.PropsWithChildren<
  Partial<{
    className: string
    containerClassName: string
  }>
>

//Context: Compartilhar o state que armazenar se o user está com mouse dentro do elemento | movendo no elemento | fora do elemento
const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

export const CardContainer = ({
  children,
  className,
  containerClassName
}: CardContainerProps) => {
  // const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)
  const [containerRef, animate] = useAnimate()
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    animate(
      containerRef.current,
      {
        rotateY: `${x}deg`,
        rotateX: `${y}deg`
      } as Variant,
      { ...smothOptions, duration: 0 }
    )
    // containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
  }
  const handleMouseEnter = () => {
    setIsMouseEntered(true)
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    // containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
    animate(
      containerRef.current,
      {
        rotateY: '0deg',
        rotateX: '0deg'
      } as Variant,
      { ...smothOptions }
    )
  }
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          'flex items-center justify-center py-20',
          containerClassName
        )}
        style={{
          perspective: '1000px'
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'relative flex items-center justify-center transition-all duration-200 ease-linear',
            className
          )}
          style={{
            transformStyle: 'preserve-3d'
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export const CardBody = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]',
        className
      )}
    >
      {children}
    </div>
  )
}

export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()
  useEffect(() => {
    handleAnimations()
  }, [isMouseEntered])

  const handleAnimations = () => {
    if (!ref.current) return
    if (!isMouseEntered) {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
      return
    }
    ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
  }

  return (
    <Tag
      ref={ref}
      className={cn('w-fit transition duration-300 ease-linear', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (!context)
    throw new Error('useMouseEnter must be used within a MouseEnterProvider')

  return context
}
