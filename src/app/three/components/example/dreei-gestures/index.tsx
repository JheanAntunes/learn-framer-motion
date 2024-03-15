'use client'
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
const ExampleLibDreeiGestures = () => {
  const sphereRadius = 2
  const sphereWidthSegments = 20
  const sphereHeightSegments = 20

  return (
    <Canvas>
      <directionalLight position={[0, 0, 1]} />
      <ambientLight />
      <mesh position={[0, 0, 0]}>
        <sphereGeometry
          args={[sphereRadius, sphereWidthSegments, sphereHeightSegments]}
        />
        {/* <meshStandardMaterial color="blue" wireframe /> */}
        <MeshWobbleMaterial wireframe color="blue" />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default ExampleLibDreeiGestures
