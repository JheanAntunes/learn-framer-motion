'use client'
import type LocomotiveScroll from 'locomotive-scroll'
import React from 'react'
const LocomotiveSmoothScroll = ({ children }: React.PropsWithChildren) => {
  React.useEffect(() => {
    let scroll: LocomotiveScroll | null = null

    async function initLocomotiveScroll() {
      try {
        const locomotiveModule = await import('locomotive-scroll')

        scroll = new locomotiveModule.default()
        if (scroll) console.log('LocomotiveScroll initialized')
      } catch (error) {
        console.error('Error initializing LocomotiveScroll:', error)
      }
    }

    initLocomotiveScroll()

    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])
  return <>{children}</>
}

export default LocomotiveSmoothScroll
