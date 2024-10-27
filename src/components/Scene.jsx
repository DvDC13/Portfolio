import {Suspense, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Earth from "./Earth.jsx";
import David from "./David.jsx";
import ReactLogo from "./React_logo.jsx";
import Cpp from "./Cpp.jsx";
import RubiksCube from "./Rubiks_cube.jsx";
import DjController from "./Dj_controller.jsx";
import CanvasLoader from "./CanvasLoader.jsx";

const MyScene = ({ activeSection , sizes }) => {

    return (
        <Canvas dpr={[1, 1.5]}>
            <Suspense fallback={<CanvasLoader />}>

                {/* Conditionally render models based on the active section */}
                {activeSection === "hero" && (
                    <>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <David position={sizes.deskPosition} rotation={[0, 0, 0]} scale={sizes.deskScale} />
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <Cpp position={sizes.cppPosition} />
                        <RubiksCube position={sizes.rubiksCubePosition} />
                        <DjController position={sizes.djControllerPosition} scale={sizes.djControllerScale} />
                    </>
                )}

                {activeSection === "about" && (
                    <>
                        <OrbitControls />
                        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
                        <Earth rotation={[0, 1.5, 0]} />
                    </>

                )}

                <ambientLight intensity={1.5} />
                <directionalLight position={[3, 2, 1]} intensity={0.5} />
            </Suspense>
        </Canvas>
    );
}

export default MyScene;
