import { Cards as Card } from '@/app/notionkanban/types/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ActionAddTask, reducerAddTask } from './add-task'
import {
  DEFAULT_BACKLOG,
  DEFAULT_DOING,
  DEFAULT_DONE,
  DEFAULT_TODO
} from './default-data'
import { ActionRemoveTask, reducerRemoveTask } from './remove-task'

export type State = {
  backlog: Card[]
  todo: Card[]
  doing: Card[]
  done: Card[]
}

export type Actions = {
  addTask: (args: ActionAddTask) => void
  removeTask: (args: ActionRemoveTask) => void
}

export const useStoreNotion = create<State & Actions>()(
  persist(
    (set) => ({
      backlog: DEFAULT_BACKLOG,
      todo: DEFAULT_TODO,
      doing: DEFAULT_DOING,
      done: DEFAULT_DONE,
      addTask: (args) => set((state) => reducerAddTask(state, args)),
      removeTask: (args) => set((state) => reducerRemoveTask(state, args))
    }),
    {
      name: 'notion-storage'
    }
  )
)
