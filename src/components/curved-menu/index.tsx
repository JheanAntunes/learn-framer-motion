'use client'
import { AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import CurvedMenu from './curved-menu'

const CurvedMenuMobile = () => {
  const [IsOpenCurvedMenu, setIsOpenCurvedMenu] = useState(false)

  const toggleCurvedMenuMobile = () => {
    setIsOpenCurvedMenu((state) => !state)
  }

  return (
    <div>
      <Button
        size="icon"
        aria-expanded={IsOpenCurvedMenu}
        className="rounded-full transition-all aria-[expanded='true']:absolute aria-[expanded='true']:z-10 aria-[expanded='true']:bg-zinc-50 aria-[expanded='true']:text-zinc-950"
        onClick={() => toggleCurvedMenuMobile()}
      >
        {IsOpenCurvedMenu ? <X /> : <Menu />}
        <span className="sr-only">
          {' '}
          {IsOpenCurvedMenu ? 'Fechar Menu' : 'Abrir Menu'}{' '}
        </span>
      </Button>
      <AnimatePresence>
        {IsOpenCurvedMenu ? <CurvedMenu /> : null}
      </AnimatePresence>
    </div>
  )
}

export default CurvedMenuMobile
