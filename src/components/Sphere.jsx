import React from 'react'
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    Decal, Float, OrbitControls, Preload, useTexture,
} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";

const Sphere = (props) => {
    const [decal] = useTexture([props.imgUrl])

    return (
        <Float speed={1.75} rotationIntensity={2}>
            <ambientLight intensity={1.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#ffffff'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    )
}

const SphereCanvas = ({icon}) => {
    return (
        <Canvas
            frameloop='demand'
            gl={{ preserveDrawingBuffers: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Sphere imgUrl={icon}/>
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default SphereCanvas
