/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/cpp.glb 
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/c-1b277fc32bbc451fa6f40e298996ba91
Title: C++
*/

import React from 'react'
import {Float, useGLTF} from '@react-three/drei'

const Cpp = (props) => {
  const { nodes, materials } = useGLTF('/models/cpp.glb')
  return (
    <Float floatIntensity={3}>
      <group {...props} scale={0.01} dispose={null}>
        <mesh geometry={nodes['C++_C++_0'].geometry} material={materials.material} position={[0, 0, 199.569]} rotation={[-Math.PI / 2, 0, 0]} scale={2} />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/cpp.glb')

export default Cpp
