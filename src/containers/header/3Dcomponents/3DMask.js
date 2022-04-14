import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {
  Points,
  PointMaterial,
  useGLTF,
  PresentationControls,
} from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { AmbientLight } from 'three'

import Mask from '../../../components/objects3D/mask3d'
import Wireframe from '../../../components/objects3D/wireframe3D'
import BentPlanes from '../../../components/objects3D/BentPlaneShapes'
import AbstractShapes from '../../../components/objects3D/AbstractShapes'

export const Mask3D = () => {
  return (
    <div style={{ position: 'relative', width: 700, height: 700 }}>
      <Canvas camera={{ fov: 25, position: [0, 0, 8] }}>
        <ambientLight intensity={0.30} />
        {/* Left light */}
        <pointLight color="#FF6619" position={[-10, 0, -15]} intensity={0.5} />
        {/* Bottom Light */}
        <pointLight position={[0, -10, 0]} intensity={0.6} />
        {/* Top Light */}
        <pointLight color="#66CCFF" position={[0, 5, 0]} intensity={0.4} />
        {/* Right Light */}
        <pointLight color="#FFFF99" position={[1, 0, 0]} intensity={.5} />
        {/* CAMERA CONTROLLER */}
        <PresentationControls
          global
          speed={0.1}
          zoom={0.8}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 14, Math.PI / 10]}
          azimuth={[-Math.PI / 10, Math.PI / 10]}
        >
          <group position-y={0} dispose={null}>
            <Wireframe />
            <Mask />
            <BentPlanes />
            <AbstractShapes />
            <Stars />
          </group>
        </PresentationControls>
      </Canvas>
    </div>
  )
}

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 6 })
  )
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 50
    ref.current.rotation.y -= delta / 55
  })
  return (
    <group position-z={7} rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
