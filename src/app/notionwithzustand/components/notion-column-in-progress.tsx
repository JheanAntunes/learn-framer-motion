import { ScrollArea } from '@/components/ui/scroll-area'
import { NotionAddRow } from './notion-add-row'
import NotionColumn from './notion-column'
import NotionRows from './notion-rows'
import QuantityRows from './quantity-rows'

const NotionColumnInProgress = () => {
  return (
    <NotionColumn>
      <h2 className="flex items-center justify-between font-serif text-2xl uppercase text-cyan-500">
        In Progress
        <QuantityRows column="doing" className="text-cyan-500" />
      </h2>
      <ScrollArea className="h-[400px] w-full">
        <NotionRows column="doing" />
      </ScrollArea>
      <NotionAddRow column="doing" />
    </NotionColumn>
  )
}

export default NotionColumnInProgress
