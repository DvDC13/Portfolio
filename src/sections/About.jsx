import React from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    return (
        <section className="c-space my-20" id="about">
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
                            <Globe
                                height={300}
                                width={300}
                                backgroundColor={"rgba(0, 0, 0, 0)"}
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl={"//unpkg.com/three-globe/example/img/earth-day.jpg"}
                                bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
                            />
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

