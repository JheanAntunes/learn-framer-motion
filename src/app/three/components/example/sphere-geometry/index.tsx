'use client'
import { Canvas, RootState, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

const ExampleSphereGeometry = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 1]} />
      <ambientLight />
      <AnimationSphereGeometry />
    </Canvas>
  )
}

const AnimationSphereGeometry = () => {
  const radius = 2
  const widthSegments = 20
  const heightSegments = 20
  const refMesh = useRef<Mesh>(null)
  const callbackAnimationFrame = (state: RootState, delta: number) => {
    if (!refMesh.current) return
    refMesh.current.rotation.y += delta
  }
  useFrame(callbackAnimationFrame)

  return (
    <mesh position={[0, 0, 0]} ref={refMesh}>
      <sphereGeometry args={[radius, widthSegments, heightSegments]} />
      <meshStandardMaterial color="blue" wireframe />
    </mesh>
  )
}

export default ExampleSphereGeometry
