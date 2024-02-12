'use client'
import { ReorderGroup, ReorderItem } from '@/components/framer-motion'
import { useState } from 'react'
import { Photo } from '.'

type ReorderProps = {
  photos: Photo[]
}
export default function Reorder({ photos }: ReorderProps) {
  const [statePhotos, setStatePhotos] = useState(photos)

  return (
    <ReorderGroup
      axis="y"
      values={statePhotos}
      onReorder={setStatePhotos}
      className="grid gap-2 p-8"
    >
      {statePhotos.map((photo) => (
        <ReorderItem key={photo.id} value={photo}>
          <li className="flex items-center gap-2 rounded border border-zinc-900 py-2">
            <div>{photo.title}</div>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="h-8 w-8 rounded-full"
            />
          </li>
        </ReorderItem>
      ))}
    </ReorderGroup>
  )
}
