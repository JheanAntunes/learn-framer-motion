'use client'
import { Column } from '@/app/notionkanban/types/types'
import { MotionDiv } from '@/components/framer-motion'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { FaFire } from 'react-icons/fa'
import { FiTrash } from 'react-icons/fi'
import { useStoreNotion } from '../store'

type EventData = {
  id: string | number
  column: Column
}
const NotionTrash = () => {
  const removeTask = useStoreNotion((state) => state.removeTask)
  const [isHovered, setIsHovered] = useState(false)
  const { toast } = useToast()
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const data = e.dataTransfer.getData('data')
    const dataFormated = JSON.parse(data) as EventData
    const { column, id } = dataFormated
    removeTask({ column, payload: { id } })
    toast({
      title: 'Task ' + column,
      description: 'Congratulations, your task was removed successfully'
    })
    setIsHovered(false)
  }
  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => {
        e.preventDefault()
        setIsHovered(true)
      }}
      onDragLeave={() => {
        setIsHovered(false)
      }}
      className={cn(
        'flex h-80 w-64 shrink-0 items-center justify-center rounded border border-solid transition-colors duration-300 ease-linear',
        isHovered
          ? 'border-red-500/40 bg-red-500/30'
          : 'border-neutral-800/40 bg-neutral-800/20'
      )}
    >
      <RenderToggleIcone isHovered={isHovered} />
    </div>
  )
}

type RenderToggleIconeProps = {
  isHovered: boolean
}
const RenderToggleIcone = ({ isHovered }: RenderToggleIconeProps) => {
  return (
    <>
      {isHovered ? (
        <MotionDiv
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="pointer-events-none transition-transform duration-300"
        >
          <FaFire className="h-12 w-12 animate-bounce text-red-500 transition-transform duration-300 animate-ease-linear" />
        </MotionDiv>
      ) : (
        <MotionDiv
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="pointer-events-none transition-transform duration-300"
        >
          <FiTrash className="h-12 w-12 animate-wiggle text-neutral-400 transition-transform duration-300 animate-infinite animate-ease-linear" />
        </MotionDiv>
      )}
    </>
  )
}

export default NotionTrash
