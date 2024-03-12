import { cn } from '@/lib/utils'
const NotionRow = ({
  children,
  className,
  ...restProps
}: React.ComponentProps<'p'>) => {
  return (
    <div
      draggable={true}
      className={cn(
        'my-1 cursor-grab rounded border border-solid border-neutral-800 p-5 text-neutral-200 active:cursor-grabbing',
        className
      )}
      {...restProps}
    >
      <p className="text-neutral-200">{children}</p>
    </div>
  )
}

export default NotionRow
