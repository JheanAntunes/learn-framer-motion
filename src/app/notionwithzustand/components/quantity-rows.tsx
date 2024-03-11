'use client'

import { Column } from '@/app/notionkanban/types/types'
import { cn } from '@/lib/utils'
import { useStoreNotion } from '../store'
import useStore from '../store/hook/useStore'

type QuantityRowsProps = {
  column: Column
  className?: React.ComponentProps<'span'>['className']
}
const QuantityRows = ({ column, className }: QuantityRowsProps) => {
  const quantityRows = useStore(useStoreNotion, (state) => state[column].length)
  return (
    <span className={cn('font-mono text-lg', className)}>
      {quantityRows && quantityRows}
    </span>
  )
}

export default QuantityRows
