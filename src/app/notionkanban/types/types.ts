export type Column = 'backlog' | 'todo' | 'doing' | 'done'
export type Cards = {
  title: string
  id: string
  column: Column
}
