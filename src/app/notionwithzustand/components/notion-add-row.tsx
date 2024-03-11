'use client'
import { Column } from '@/app/notionkanban/types/types'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useStoreNotion } from '../store'

type NotionAddRowProps = {
  column: Column
}

export function NotionAddRow({ column }: NotionAddRowProps) {
  const [valueTextarea, setValueTextarea] = useState('')
  const { toast } = useToast()
  const addNewTask = useStoreNotion((state) => state.addTask)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //checked input [empty]
    if (!valueTextarea.trim().length) return
    addNewTask({ column, payload: { message: valueTextarea } })
    toast({
      title: 'Task ' + column,
      description: 'Congratulations, your task was created successfully'
    })
    setValueTextarea('')
  }
  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueTextarea(e.target.value)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          style={{ margin: '0px' }}
          variant="ghost"
          className="gap-1 text-neutral-300"
        >
          Add new task <Plus className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Task</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Textarea
            value={valueTextarea}
            placeholder="your message"
            onChange={handleChangeTextarea}
          />
          <DialogFooter className="mt-4 gap-4">
            <DialogClose>Close</DialogClose>
            <DialogClose asChild>
              <Button type="submit">Add task</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
