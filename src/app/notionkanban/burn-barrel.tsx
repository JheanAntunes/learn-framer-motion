import { cn } from '@/lib/utils'
import { useState } from 'react'
import { FaFire } from 'react-icons/fa'
import { FiTrash } from 'react-icons/fi'
import { Cards } from './types'
type BurnBarrelProps = {
  setCards: React.Dispatch<React.SetStateAction<Cards[]>>
}
export default function BurnBarrel({ setCards }: BurnBarrelProps) {
  const [active, setActive] = useState(false)
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setActive(true)
  }
  const handleDragLeave = () => {
    setActive(false)
  }

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData('cardId')
    setCards((pv) => pv.filter((c) => c.id !== cardId))
    setActive(false)
  }
  return (
    <div
      onDrop={(e) => {
        console.log('event Drop')
        handleDragEnd(e)
        setActive(false)
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={cn(
        'mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl',
        active
          ? 'border-red-800 bg-red-800/20 text-red-500'
          : 'border-neutral-500 bg-neutral-500/20 text-neutral-500'
      )}
    >
      {active ? <FaFire /> : <FiTrash />}
    </div>
  )
}
