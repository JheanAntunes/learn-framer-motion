import { ScrollArea } from '@/components/ui/scroll-area'
import { NotionAddRow } from './notion-add-row'
import NotionColumn from './notion-column'
import NotionRows from './notion-rows'
import QuantityRows from './quantity-rows'

const NotionColumnTODO = () => {
  return (
    <NotionColumn>
      <h2 className="flex items-center justify-between font-serif text-2xl uppercase text-yellow-500">
        TODO
        <QuantityRows column="todo" className="text-yellow-500" />
      </h2>
      <ScrollArea className="h-[400px] w-full">
        <NotionRows column="todo" />
      </ScrollArea>
      <NotionAddRow column="todo" />
    </NotionColumn>
  )
}

export default NotionColumnTODO
