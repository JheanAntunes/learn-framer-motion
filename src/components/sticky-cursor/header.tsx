import { Menu } from 'lucide-react'
import { Button } from '../ui/button'

const StickyCursorHeader = () => {
  return (
    <header className="p-8">
      <nav className="flex items-center justify-end">
        <Button size="icon" variant="outline" className="rounded-full">
          <Menu />
        </Button>
      </nav>
    </header>
  )
}

export default StickyCursorHeader
