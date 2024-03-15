import ExampleLibDreeiGestures from './components/example/dreei-gestures'

// type CubeProps = {
//   position: number[]
//   size: number[]
//   color: string
// }

// const Cube = ({ position, size, color }: CubeProps) => {
//   const ref = useRef<ThreeElements['mesh']>(null)
//   useFrame((state, delta) => {
//     if (!ref.current) return
//     ref.current.rotation?.x += delta
//     ref.current.rotation.y += delta * 1.0
//     ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
//   })
//   return (
//     <mesh ref={ref} position={position}>
//       <boxGeometry args={size} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   )
// }

// type SphereProps = CubeProps
// const Sphere = ({ size, color, position }: SphereProps) => {
//   // const ref = useRef<ThreeElements['mesh']>(null)
//   // useFrame((state, delta) => {
//   //   if (!ref.current) return
//   //   ref.current.rotation.x += delta
//   //   ref.current.rotation.y += delta * 1.0
//   //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
//   // })
//   return (
//     <mesh>
//       <sphereGeometry />
//       <meshStandardMaterial color={color} wireframe />
//     </mesh>
//   )
// }

// type TorusProps = CubeProps
// const Torus = ({ size, color, position }: TorusProps) => {
//   return (
//     <mesh position={position}>
//       <torusGeometry args={size} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   )
// }

// const TorusKnot = ({
//   position,
//   color
// }: TorusGeometryProps & MeshProps & MeshStandardMaterialProps) => {
//   // const ref = useRef<ThreeElements['mesh']>(null)
//   // useFrame((state, delta) => {
//   //   if (!ref.current) return
//   //   ref.current.rotation.x += delta
//   //   ref.current.rotation.y += delta * 1.0
//   //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
//   // })
//   return (
//     <mesh position={position}>
//       <torusKnotGeometry args={[1, 0.1, 1000, 50]} />
//       <meshStandardMaterial color={color} />
//     </mesh>
//   )
// }

const PageThree = () => {
  return (
    <div className="relative h-full bg-neutral-950">
      <header className="text-neutral-50">
        <nav>
          <ul className="flex w-full justify-between p-8">
            <a href="#">dsadas</a>
            <a href="#">dsadas</a>
            <a href="#">dsadas</a>
            <a href="#">dsadas</a>
          </ul>
        </nav>
      </header>
      <div className="absolute -z-10 flex h-svh w-full items-center justify-center">
        {/* <ExampleBoxGeometry /> */}
        {/* <ExampleSphereGeometry /> */}
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-neutral-50">
          Front-end
        </h1>
        <ExampleLibDreeiGestures />
      </div>
    </div>
  )
}

//Tag <mesh> Renderizar qualquer bloco 3d </mesh>
//Tag <mesh args={[2, 2, 4]}>
//props:
//args={[0, 0, 0]} largura, comprimento e profundidade:.
// </mesh>
//<meshStandardMaterial />
export default PageThree
