import DropIndicator from '@/app/notionkanban/components/drop-indicator'
import { Column } from '@/app/notionkanban/types/types'
import { ScrollArea } from '@/components/ui/scroll-area'
import { NotionAddRow } from './notion-add-row'
import NotionColumn from './notion-column'
import NotionRows from './notion-rows'
import QuantityRows from './quantity-rows'

const NotionColumnInProgress = () => {
  const column: Column = 'doing'
  return (
    <NotionColumn column={column}>
      <h2 className="flex items-center justify-between font-serif text-2xl uppercase text-cyan-500">
        In Progress
        <QuantityRows column={column} className="text-cyan-500" />
      </h2>
      <ScrollArea className="h-[400px] w-full">
        <NotionRows column={column} />
        <DropIndicator beforeId="-1" column={column} />
      </ScrollArea>
      <NotionAddRow column={column} />
    </NotionColumn>
  )
}

export default NotionColumnInProgress
