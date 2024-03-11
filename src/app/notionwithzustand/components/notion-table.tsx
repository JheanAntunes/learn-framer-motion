import NotionColumnBackLog from './notion-column-backlog'
import NotionColumnComplete from './notion-column-complete'
import NotionColumnInProgress from './notion-column-in-progress'
import NotionColumnTODO from './notion-column-todo'
import NotionTrash from './notion-trash'

const NotionTable = () => {
  return (
    <div className="container flex h-svh w-full gap-8 py-8">
      <NotionColumnBackLog />
      <NotionColumnTODO />
      <NotionColumnInProgress />
      <NotionColumnComplete />
      <NotionTrash />
    </div>
  )
}

export default NotionTable
