import React from 'react'
import { Tilt } from 'react-tilt'
import { myProjects } from "../constants/index.js";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <div className="text-white rounded-2xl sm:w-[360px] w-full text-center p-7">
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-[#651fff] p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src="assets/github.svg"
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] font-bold text-black`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </div>
    )
}

const Projects = () => {
    return (
        <section className="c-space py-20" id="projects">
            <div>
                <p className="text-gray-500 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    My Work
                </p>
                <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px]">
                    Projects
                </p>
            </div>

            <div className="w-full flex">
                <p
                    className="text-gray-500 mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly
                    described with links to code repositories and live demos in it.
                </p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {myProjects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    )
}
export default Projects
