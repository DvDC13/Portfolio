import React from 'react'
import { skills } from '../constants'
import SphereCanvas from "../components/Sphere.jsx";

const Skills = () => {
    return (
        <section className="c-space py-10" id="skills">
            <div>
                <p className="text-gray-500 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    My Expertise
                </p>
                <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px]">
                    Skills
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-20 mt-20">
                {
                    skills.map((skill) => (
                        <div className="w-28 h-28">
                            <SphereCanvas icon={skill.icon}/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Skills
