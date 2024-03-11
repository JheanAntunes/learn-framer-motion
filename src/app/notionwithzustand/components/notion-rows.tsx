'use client'

import { Column } from '@/app/notionkanban/types/types'
import { MotionDiv } from '@/components/framer-motion'
import { useStoreNotion } from '../store'
import useStore from '../store/hook/useStore'
import NotionRow from './notion-row'

type NotionRows = {
  column: Column
}

type HandleDragStartParameter = {
  event: React.DragEvent<HTMLDivElement>
  id: string | number
  column: Column
}

const NotionRows = ({ column }: NotionRows) => {
  const tasks = useStore(useStoreNotion, (state) => state[column])!
  const handleDragStart = ({ column, event, id }: HandleDragStartParameter) => {
    event.dataTransfer.setData(
      'data',
      JSON.stringify({
        column,
        id
      })
    )
  }
  return (
    <>
      {tasks &&
        tasks.map(({ id, title }) => (
          <MotionDiv key={id} layout>
            <NotionRow
              onDragStart={(event) => handleDragStart({ id, event, column })}
            >
              {title}
            </NotionRow>
          </MotionDiv>
        ))}
    </>
  )
}

export default NotionRows
