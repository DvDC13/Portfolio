import React, {Suspense, useEffect, useState} from 'react'
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Canvas} from "@react-three/fiber";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import David from "../components/David.jsx";
import ReactLogo from "../components/React_logo.jsx";
import {PerspectiveCamera} from "@react-three/drei";
import Cpp from "../components/Cpp.jsx";
import RubiksCube from "../components/Rubiks_cube.jsx";
import DjController from "../components/Dj_controller.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {

    const isSmallScreen = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmallScreen, isMobile, isTablet)

    const DavidModel = React.memo(() => <David position={sizes.deskPosition} rotation={[0, 0, 0]} scale={sizes.deskScale} />)

    return (
        <section className="min-h-screen flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hello, I'm David <span className="waving-hand">✌🏻</span>
                </p>
                <p className="hero_tag text-gray_gradient">
                    Building and Learning Things
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full" dpr={[1, 1.5]}>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                        <ambientLight intensity={2} />
                        <hemisphereLight intensity={0.3} groundColor={0xffffff} />

                        <Suspense fallback={<CanvasLoader />}>
                            <David position={sizes.deskPosition} rotation={[0, 0, 0]} scale={sizes.deskScale} />
                        </Suspense>

                        <Suspense fallback={<CanvasLoader />}>
                            <ReactLogo position={sizes.reactLogoPosition} />
                        </Suspense>

                        <Suspense fallback={<CanvasLoader />}>
                            <Cpp position={sizes.cppPosition} />
                        </Suspense>

                        <Suspense fallback={<CanvasLoader />}>
                            <RubiksCube position={sizes.rubiksCubePosition} />
                        </Suspense>

                        <Suspense fallback={<CanvasLoader />}>
                            <DjController position={sizes.djControllerPosition} scale={sizes.djControllerScale} />
                        </Suspense>
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Want to know more?" isBeam containerClass="w-full sm:min-w-96 font-semibold"/>
                </a>
            </div>
        </section>
    )
}
export default Hero
