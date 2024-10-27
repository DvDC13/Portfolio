import React, {Suspense} from 'react'
import Button from "../components/Button.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Earth from "../components/Earth.jsx";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const isWebGLAvailable = () => {
    try {
        const canvas = document.createElement('canvas');
        return !!window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
        return false;
    }
};

const About = () => {
    return (
        <section className="c-space py-20" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="w-full md:w-1/2">
                        <p className="text-4xl font-bold text-white mb-4">Hi, I'm David</p>
                        <p className="text-lg text-white-700 mb-6">A passionate Computer Engineer with a love for all
                            things tech, from algorithmic thinking to deep learning and CUDA programming. I'm always
                            pushing the limits of my knowledge, eager to create and optimize solutions that matter.</p>
                        <p className="text-lg text-white-700 mb-6">I believe in the power of code to change the world,
                            and I'm constantly learning new tools and technologies to keep up with this fast-paced
                            industry.</p>
                        <p className="text-lg text-white-700 mb-6">Whether it's building complex systems or exploring
                            new frameworks, I’m driven by curiosity and the desire to innovate.</p>
                    </div>
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            {
                                isWebGLAvailable() ? (
                                    <Canvas dpr={[1, 1.5]}>
                                        <Suspense fallback={<CanvasLoader />}>
                                            <PerspectiveCamera makeDefault position={[0, 0, 3]} />
                                            <OrbitControls />

                                            <Earth rotation={[0, 1.5, 0]} />

                                            <ambientLight intensity={1.0} />
                                            <directionalLight position={[3, 2, 1]} intensity={0.5} />
                                        </Suspense>
                                    </Canvas>
                                ) : (
                                    <p className="text-white text-3xl">WebGL is not supported!</p>
                                )
                            }
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I can work remotely across the globe
                            </p>
                            <p className="grid-subtext">
                                Currently based in France
                            </p>
                            <a href="#contact">
                                <Button name="Let's Connect" isBeam containerClass="inline-block w-full px-6 py-3 mt-4 font-semibold
                                rounded-lg hover:bg-purple-500 transition duration-300"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About

