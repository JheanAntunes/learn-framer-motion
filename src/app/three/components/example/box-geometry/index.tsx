'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const ExampleBoxGeometry = () => {
  return (
    <div className="flex h-svh w-full items-center justify-center">
      <Canvas>
        <directionalLight position={[0, 0, 1]} />
        <ambientLight />
        <AnimationBoxGeometry />
      </Canvas>
    </div>
  )
}

const AnimationBoxGeometry = () => {
  const refMesh = useRef(null)

  useFrame((state, delta) => {
    if (!refMesh.current) return
    refMesh.current.rotation.y += delta
    refMesh.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })
  return (
    <mesh position={[0, 0, 0]} ref={refMesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  )
}

export default ExampleBoxGeometry
