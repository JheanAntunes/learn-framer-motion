import { State } from '.'

export type ActionRemoveTask = {
  column: keyof State
  payload: {
    id: string | number
  }
}

type FilteredProps = { state: State; column: keyof State; id: string | number }
const filtered = ({ column, id, state }: FilteredProps) => {
  return state[column].filter((task) => task.id !== id)
}

export const reducerRemoveTask = (state: State, action: ActionRemoveTask) => {
  const { column, payload } = action
  switch (action.column) {
    case 'backlog':
      return {
        ...state,
        backlog: filtered({ column, id: payload.id, state })
      }
      break
    case 'todo':
      return {
        ...state,
        todo: filtered({ column, id: payload.id, state })
      }
      break
    case 'doing':
      return { ...state, doing: filtered({ column, id: payload.id, state }) }
      break
    case 'done':
      return { ...state, done: filtered({ column, id: payload.id, state }) }
      break
    default:
      return state
      break
  }
}
