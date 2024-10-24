import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { workExperiences } from '../constants'

const ExperienceCard = ({ experience }) => {

    return (
        <VerticalTimelineElement
        contentStyle={{ background: '#651fff', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #651fff' }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                />
            </div>
        }
        >
        <div>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
            <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
            >
                {experience.company_name}
            </p>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </div>
        </VerticalTimelineElement>
    )
}

const Experience = () => {
    return (
        <section className="c-space my-20" id="work">
            <>
                <div>
                    <p className="text-gray-500 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                        What I have done so far
                    </p>
                    <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px]">
                        Work Experience
                    </p>
                </div>
                <div className="mt-20 flex flex-col">
                    <VerticalTimeline>
                        {workExperiences.map((experience, index) => (
                            <ExperienceCard key={index} experience={experience} />
                        ))}
                    </VerticalTimeline>
                </div>
            </>
        </section>
    )
}
export default Experience
