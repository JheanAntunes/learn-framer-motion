'use client'
import { MotionDiv } from '@/components/framer-motion'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { useState } from 'react'

const BasicAnimationMotionDiv = () => {
  const [stateX, setStateX] = useState([0])
  const [stateY, setStateY] = useState([0])
  const [stateRotate, setStateRotate] = useState([0])

  return (
    <section className="flex h-full items-center justify-center overflow-hidden">
      <div className="flex items-center gap-8">
        <MotionDiv
          className="h-48 w-96 rounded border border-dashed border-red-600"
          initial={{
            x: 0,
            y: 0,
            rotate: 0
          }}
          animate={{
            x: stateX[0],
            y: stateY[0],
            rotate: stateRotate[0]
          }}
        />
        <div className="flex w-96 flex-col gap-5">
          <div className="flex items-center gap-5">
            <span className="flex w-16">Eixo X</span>
            <div className="flex w-full items-center gap-5">
              <Slider
                onValueChange={(e) => setStateX(e)}
                value={stateX}
                max={100}
                step={1}
                className="w-full"
              />
              <Input
                type="text"
                className="w-[80px] text-center"
                placeholder="50"
                value={stateX[0]}
                onChange={(e) => {
                  if (Number.isNaN(Number(e.target.value))) return
                  setStateX([Number(e.target.value)])
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex w-16">Eixo Y</span>
            <div className="flex w-full items-center gap-5">
              <Slider
                onValueChange={(e) => setStateY(e)}
                max={100}
                step={1}
                value={stateY}
                className="w-full"
              />
              <Input
                type="text"
                placeholder="50"
                value={stateY[0]}
                className="w-[80px] text-center"
                onChange={(e) => {
                  if (Number.isNaN(Number(e.target.value))) return
                  setStateY([Number(e.target.value)])
                }}
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <span>Rotate</span>
            <div className="flex w-full items-center gap-5">
              <Slider
                onValueChange={(e) => setStateRotate(e)}
                max={100}
                step={1}
                value={stateRotate}
                className="w-full"
              />
              <Input
                type="text"
                className="w-[80px] text-center"
                value={stateRotate[0]}
                placeholder="50"
                onChange={(e) => {
                  if (Number.isNaN(Number(e.target.value))) return
                  setStateRotate([Number(e.target.value)])
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicAnimationMotionDiv
