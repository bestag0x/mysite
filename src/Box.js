import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
 

export default function Box(){
    const size = 1
    const [hidden, setVisible] = useState(false)
  return (
    <mesh scale={size * 2}>
      <boxGeometry />
      <meshStandardMaterial />
      <Html
        style={{
          transition: 'all 0.2s',
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`
        }}
        distanceFactor={1.5}
        position={[0, 0, 0.51]}>
        <span>Size</span>
      </Html>
    </mesh>
  )

}