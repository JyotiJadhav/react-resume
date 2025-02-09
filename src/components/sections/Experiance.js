import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = ({experiences}) => {
    return (
        <section id="experience" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up">
                    My Journey
                </h2>
                <VerticalTimeline>
                    {experiences.map((exp, idx) => (
                        <VerticalTimelineElement
                            key={idx}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: "rgba(255, 255, 255, 0.9)",
                                color: "#333",
                                borderRadius: "15px",
                                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.3)"
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid rgba(255, 255, 255, 0.9)"
                            }}
                            date={exp.duration}
                            iconStyle={{
                                background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                                color: "#fff",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            icon={<i className="fas fa-briefcase text-2xl"></i>}
                        >
                            <h3 className="vertical-timeline-element-title text-xl font-bold text-gray-800">{exp.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-lg italic text-gray-600">{exp.company}</h4>
                            <p className="text-base mt-2 text-gray-700">{exp.description.join(", ")}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;