import YasinLoading from '@/components/loading/yasin-loading'
import React from 'react'

const LayoutYasin = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <YasinLoading />
      {children}
    </>
  )
}

export default LayoutYasin
