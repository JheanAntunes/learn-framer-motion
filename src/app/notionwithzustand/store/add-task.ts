import { Cards } from '@/app/notionkanban/types/types'
import { v4 as uuidv4 } from 'uuid'
import { State } from '.'
export type ActionAddTask = {
  column: keyof State
  payload: {
    message: string
  }
}
export const reducerAddTask = (state: State, action: ActionAddTask) => {
  const { column, payload } = action
  const newTask: Cards = {
    column,
    id: uuidv4(),
    title: payload.message
  }
  switch (action.column) {
    case 'backlog':
      return { ...state, backlog: [...state.backlog, newTask] }
      break
    case 'todo':
      return { ...state, todo: [...state.todo, newTask] }
      break
    case 'doing':
      return { ...state, doing: [...state.doing, newTask] }
      break
    case 'done':
      return { ...state, done: [...state.done, newTask] }
      break
    default:
      return state
      break
  }
}
