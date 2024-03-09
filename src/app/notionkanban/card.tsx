import { MotionDiv } from '@/components/framer-motion'
import DropIndicator from './drop-indicator'
import { Cards } from './types'

export default function Card({
  column,
  id,
  title,
  handleDragStart
}: Cards & {
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, card: Cards) => void
}) {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <MotionDiv layout layoutId={id}>
        <div
          draggable="true"
          onDragStart={(e) => {
            handleDragStart(e, {
              column,
              id,
              title
            })
          }}
          className="cursor-grab overflow-hidden rounded border border-neutral-700 bg-neutral-800 active:cursor-grabbing"
        >
          <p className="w-full max-w-56 text-wrap bg-neutral-800 p-3 text-sm text-neutral-100">
            {title}
          </p>
        </div>
      </MotionDiv>
    </>
  )
}
