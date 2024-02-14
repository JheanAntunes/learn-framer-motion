'use client'
import { MotionButton, MotionLi, MotionUl } from '@/components/framer-motion'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const ExampleAnimatePresence = () => {
  const [items, setItems] = useState([0])
  const [isChecked, setIsChecked] = useState(false)
  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="grid gap-8">
        <Label className="flex w-fit items-center gap-2">
          <Badge>Ativar pop-layout</Badge>
          <Checkbox
            checked={isChecked}
            onClick={() => setIsChecked((stateIsChecked) => !stateIsChecked)}
          />
        </Label>
        <MotionButton
          className={buttonVariants()}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setItems((stateItems) => [...stateItems, stateItems.length])
          }}
        >
          Add new Item
        </MotionButton>
        <MotionUl className="grid gap-2">
          <AnimatePresence mode={isChecked ? 'popLayout' : 'sync'}>
            {/* Render list items*/}
            {items.map((_, index) => (
              <MotionLi
                key={_ + index}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.6, delay: 0.1 }}
                className={buttonVariants({ variant: 'destructive' })}
                onClick={() => {
                  setItems((stateItems) => {
                    const filterStateItems = stateItems.filter(
                      (_, id) => id !== index
                    )
                    return filterStateItems
                  })
                }}
              />
            ))}
          </AnimatePresence>
        </MotionUl>
      </div>
    </section>
  )
}

export default ExampleAnimatePresence
