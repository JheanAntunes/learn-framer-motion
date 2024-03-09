'use client'
import { useState } from 'react'
import BurnBarrel from './burn-barrel'
import { Column } from './column'
import { DEFAULT_CARD } from './data-card'
import { Cards } from './types'

export const Board = () => {
  const [cards, setCards] = useState<Cards[]>(DEFAULT_CARD)
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Column
        title="BackLog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  )
}
