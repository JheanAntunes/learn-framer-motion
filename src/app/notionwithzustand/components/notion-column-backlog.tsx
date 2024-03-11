import { ScrollArea } from '@/components/ui/scroll-area'
import { NotionAddRow } from './notion-add-row'
import NotionColumn from './notion-column'
import NotionRows from './notion-rows'
import QuantityRows from './quantity-rows'

const NotionColumnBackLog = () => {
  return (
    <NotionColumn>
      <h2 className="flex items-center justify-between font-serif text-2xl uppercase text-neutral-400">
        Backlog
        <QuantityRows column="backlog" className="text-neutral-400" />
      </h2>
      <ScrollArea className="h-[400px] w-full">
        <NotionRows column="backlog" />
      </ScrollArea>
      <NotionAddRow column="backlog" />
    </NotionColumn>
  )
}

export default NotionColumnBackLog
