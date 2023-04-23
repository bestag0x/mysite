import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, useProgress, Html } from "@react-three/drei"
import Model from "./Model"
import Overlay from "./Overlay"
import Box from './Box'

console.clear()

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <>
      <Canvas shadows eventSource={document.getElementById("root")} eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={<Loader />}>
          <Box />
          <Model scroll={scroll} />
          <Environment preset="city"/>
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </>
  )
}


function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}
