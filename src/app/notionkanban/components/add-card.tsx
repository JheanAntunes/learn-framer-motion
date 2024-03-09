import { motion } from 'framer-motion'
import React, { SetStateAction, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Cards, Column } from '../types/types'

type PropsAddCard = {
  setCards: React.Dispatch<SetStateAction<Cards[]>>
  column: Column
}

export default function AddCard({ column, setCards }: PropsAddCard) {
  const [text, setText] = useState('')
  const [adding, setAdding] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text.trim().length) return

    const newCard: Cards = {
      column,
      title: text.trim(),
      id: Math.random().toString()
    }
    setCards((pv) => [...pv, newCard])
    setAdding(false)
  }
  return (
    <>
      {adding ? (
        <>
          <motion.form layout onSubmit={handleSubmit}>
            <textarea
              onChange={(e) => setText(e.target.value)}
              placeholder="add new task..."
              className="w-full text-wrap rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder:via-violet-300 focus:outline-0"
            ></textarea>
            <div className="mt-1.5 flex items-center justify-end gap-1.5">
              <motion.button
                onClick={() => setAdding(false)}
                className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
              >
                Close
              </motion.button>
              <motion.button
                type="submit"
                className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5  text-xs text-neutral-950 transition-transform hover:bg-neutral-300"
              >
                Add +
              </motion.button>
            </div>
          </motion.form>
        </>
      ) : (
        <motion.button
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add Card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  )
}
