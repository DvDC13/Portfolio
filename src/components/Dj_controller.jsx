/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 public/models/dj_controller.glb 
Author: James.Hasegawa (https://sketchfab.com/James.Hasegawa)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dj-controller-1488495e0b374f1a9c38918b350be251
Title: DJ Controller
*/

import React from 'react'
import {Float, useGLTF} from '@react-three/drei'

const DjController = (props) => {
  const { nodes, materials } = useGLTF('/models/dj_controller.glb')
  return (
    <Float floatIntensity={3}>
      <group {...props} rotation={[-Math.PI / 3, 0, 0]} dispose={null}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.BoothButton_mat} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.BrakeButton_mat} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.CueButtonEmis_mat} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.FuncKey_mat} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.InnerJogWheel_mat} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.JogwheelSide_mat} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Knob_mat} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.MetallicSwitch_mat} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.MixerMain_mat} />
        <lineSegments geometry={nodes.Object_11.geometry} material={materials.MixerSide_mat} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.MixerSide_mat} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.PFLButton_mat} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.PlayButtonEmis_mat} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.RedTip_mat} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.SkimSlider_mat} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Slider_mat} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.SlipButton_Mat} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Void} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.WhiteTip_mat} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.YellowTip_mat} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.bluetip_mat} />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/dj_controller.glb')

export default DjController
