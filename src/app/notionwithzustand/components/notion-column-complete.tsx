import { ScrollArea } from '@/components/ui/scroll-area'
import { NotionAddRow } from './notion-add-row'
import NotionColumn from './notion-column'
import NotionRows from './notion-rows'
import QuantityRows from './quantity-rows'

const NotionColumnComplete = () => {
  return (
    <NotionColumn>
      <h2 className="flex items-center justify-between font-serif text-2xl uppercase text-emerald-500">
        Complete
        <QuantityRows column="done" className="text-emerald-500" />
      </h2>
      <ScrollArea className="h-[400px] w-full">
        <NotionRows column="done" />
      </ScrollArea>
      <NotionAddRow column="done" />
    </NotionColumn>
  )
}

export default NotionColumnComplete
