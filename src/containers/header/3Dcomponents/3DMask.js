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

export const Mask3D = () => {
  return (
    <div style={{ position: 'relative', width: 600, height: 600 }}>
      <Canvas camera={{ fov: 25, position: [0, 0, 8] }}>
        <ambientLight intensity={0.75} />
        {/* Left light */}
        <pointLight color="#FF6619" position={[-10, 0, -20]} intensity={0.05} />
        {/* Bottom Light */}
        <pointLight position={[0, -10, 0]} intensity={1.0} />
        {/* Bottom Top */}
        <pointLight position={[0, 5, 0]} intensity={0.2} />
        {/* Right Light */}
        <pointLight color="#0B2F57" position={[10, 0, 0]} intensity={2.5} />
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
            <Mask />
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
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  )

  useFrame((state, delta) => {
    // ref.current.rotation.x -= delta / 10
    // ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
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
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}
