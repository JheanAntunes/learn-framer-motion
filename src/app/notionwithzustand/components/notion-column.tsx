'use client'

import { Column } from '@/app/notionkanban/types/types'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type Props = {
  column: Column
}

type EventData = {
  id: string | number
  column: Column
}

type NotionColumnProps = React.PropsWithChildren<Props>

type ShorthandDragEvent = React.DragEvent<HTMLDivElement>

const NotionColumn = ({ children, column }: NotionColumnProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const getIndicators = () => {
    return Array.from(
      document.querySelectorAll(`[data-column="${column}"]`)
    ) as HTMLDivElement[]
  }

  const clearIndicatorsActive = (indicators?: HTMLDivElement[]) => {
    if (indicators) {
      indicators.forEach((indicator) => {
        indicator.style.opacity = '0'
      })
      return
    }
    const clearIndicators = getIndicators()
    clearIndicators.forEach((indicator) => {
      indicator.style.opacity = '0'
    })
  }

  const getIndicator = (
    e: ShorthandDragEvent,
    indicators: HTMLDivElement[]
  ) => {
    const DISTANCE_OFFSET = 70
    const indicatorActive = indicators.reduce(
      (prevIndicator, indicator) => {
        const { top } = indicator.getBoundingClientRect()
        const offset = e.clientY - (top + DISTANCE_OFFSET)
        if (offset < 0 && offset > prevIndicator.offset) {
          return { elementIndicator: indicator, offset }
        } else {
          return prevIndicator
        }
      },
      {
        elementIndicator: indicators[indicators.length - 1],
        offset: Number.NEGATIVE_INFINITY
      }
    )
    console.log('indicatorActive: ', indicatorActive.elementIndicator)
    return indicatorActive
  }

  const handleDrop = (e: ShorthandDragEvent) => {
    const dataEvent = e.dataTransfer.getData('data')
    const dataEventFormated = JSON.parse(dataEvent) as EventData
    const { id, column: dataColumn } = dataEventFormated
    console.log('data: ', dataEventFormated)
    const before = getIndicators().find((c) => c.id === id)
    if (!before) return
    console.log('beforeIndicator: ', before)
    if (before.dataset.column !== dataColumn) {
      console.log('são de colunas diferentes')
    }
    setIsHovered(false)
  }

  const handleDragOver = (e: ShorthandDragEvent) => {
    e.preventDefault()
    setIsHovered(true)
    const indicators = getIndicators()
    clearIndicatorsActive(indicators)
    const { elementIndicator } = getIndicator(e, indicators)
    elementIndicator.style.opacity = '1'
  }

  const handleDragLeave = (e: ShorthandDragEvent) => {
    setIsHovered(false)
    clearIndicatorsActive()
  }

  return (
    <div
      className={cn(
        'w-56 shrink-0 space-y-5 transition-colors',
        isHovered ? 'bg-neutral-800/40' : ''
      )}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {children}
    </div>
  )
}

export default NotionColumn
