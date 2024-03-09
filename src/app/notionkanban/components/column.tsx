import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Cards, Column as TypeColumn } from '../types/types'
import AddCard from './add-card'
import Card from './card'
import DropIndicator from './drop-indicator'

type PropsColums = {
  title: string
  headingColor: string
  column: TypeColumn
  cards: Cards[]
  setCards: React.Dispatch<React.SetStateAction<Cards[]>>
}

export const Column = ({
  title,
  cards,
  setCards,
  column,
  headingColor
}: PropsColums) => {
  const [active, setActive] = useState(false)
  const filteredCards = cards.filter((c) => c.column === column)

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`))
  }

  const getNearestIndicator = (
    e: React.DragEvent<HTMLDivElement>,
    indicators: HTMLDivElement[]
  ) => {
    const DISTANCE_OFFSET = 50
    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = e.clientY - (box.top + DISTANCE_OFFSET)
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1]
      }
    )

    return el
  }

  const clearHighlights = (indicators?: HTMLDivElement[]) => {
    const elementsIndicators =
      indicators ?? (getIndicators() as HTMLDivElement[])
    elementsIndicators.forEach((child) => {
      child.style.opacity = '0'
    })
  }

  const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
    const indicators = getIndicators() as HTMLDivElement[]

    clearHighlights(indicators)
    const el = getNearestIndicator(e, indicators)

    if (el.element) {
      el.element.style.opacity = '1'
    }
  }

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    card: Omit<Cards, 'handleDragStart'>
  ) => {
    e.dataTransfer.setData('cardId', card.id)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    highlightIndicator(e)
    setActive(true)
  }

  const handleDragLeave = () => {
    setActive(false)
    clearHighlights()
  }

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setActive(false)
    clearHighlights()
    const cardId = e.dataTransfer.getData('cardId')
    const indicators = getIndicators() as HTMLDivElement[]
    const { element } = getNearestIndicator(e, indicators)
    if (!element) return
    const before = element.dataset.before || '-1'
    let copy = [...cards]
    if (before !== cardId) {
      let cardToTransfer = copy.find((c) => c.id === cardId)
      if (!cardToTransfer) return
      cardToTransfer = { ...cardToTransfer, column: column }
      copy = copy.filter((c) => c.id !== cardId)
      const moveToBack = before === '-1'
      if (moveToBack) {
        copy.push(cardToTransfer)
        setCards(copy)
        return
      }
      const insertAtIndex = copy.findIndex((el) => el.id === before)
      console.log('insertAtIndex: ', insertAtIndex)
      if (!insertAtIndex) return
      copy.splice(insertAtIndex, 0, cardToTransfer)
      setCards(copy)
    }
  }

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="text-neutral-400">{filteredCards.length}</span>
      </div>
      <div
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDragEnd}
        className={cn(
          'h-full w-full transition-colors',
          active ? 'bg-neutral-800/50' : 'bg-neutral-800/0'
        )}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />
        })}
        <DropIndicator beforeId="-1" column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  )
}
