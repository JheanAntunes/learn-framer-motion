import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

type State = {
  x: number
  y: number
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const debounce = useDebouncedCallback((state: State) => {
    setMousePosition(state)
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // debounce({ x: e.clientX, y: e.clientY })
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      //clear
      window.removeEventListener('mousemove', handleMouseMove)
    }
    // setMousePosition({})
  }, [setMousePosition, debounce])

  return mousePosition
}

export default useMousePosition
