import Reorder from './reorder'

export type Photo = {
  álbumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

const getPhotos = async (): Promise<Photo[]> => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_limit=10'
  )
  if (!response.ok) throw new Error('getPhotos: failed get data photos')
  const dataPhotos = await response.json()
  return dataPhotos
}

const ReorderExample = async () => {
  const dataPhotos = await getPhotos()
  return <Reorder photos={dataPhotos} />
}

export default ReorderExample
