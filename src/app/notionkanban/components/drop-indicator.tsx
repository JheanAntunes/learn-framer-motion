import { Column } from '../types/types'

type PropsDropIndicator = {
  beforeId: string
  column: Column
}
export default function DropIndicator({
  beforeId,
  column
}: PropsDropIndicator) {
  return (
    <div
      data-before={beforeId || '-1'}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    ></div>
  )
}
