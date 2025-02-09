import React from 'react';

const Skills = ({ skills }) => {
    return (
        <section id="skills" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up">
                    My Skills
                </h2>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {Object.keys(skills).map((category, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white shadow-lg rounded-lg overflow-hidden p-6 transform transition-transform hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay={`${idx * 100}`}
                        >
                            {/* Category Header */}
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full shadow-md">
                                    {/* Relevant Icon */}
                                    {category === "Programming Languages" && <i className="fas fa-code"></i>}
                                    {category === "Frameworks" && <i className="fas fa-layer-group"></i>}
                                    {category === "Tools" && <i className="fas fa-wrench"></i>}
                                    {category === "Databases" && <i className="fas fa-database"></i>}
                                    {category === "Soft Skills" && <i className="fas fa-users"></i>}
                                    {category === "Technologies" && <i className="fas fa-laptop-code"></i>}
                                    {category === "Cloud" && <i className="fas fa-cloud"></i>}
                                    {category === "Project Management" && <i className="fas fa-tasks"></i>}
                                </div>
                                <h3 className="text-2xl font-bold text-purple-600">{category}</h3>
                            </div>

                            {/* Skill List */}
                            <ul className="space-y-3">
                                {skills[category].map((skill, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-gray-700">
                                        <span className="flex items-center justify-center w-4 h-4 bg-cyan-500 rounded-full"></span>
                                        <span className="font-medium">{skill}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative Icon */}
                            <div className="absolute bottom-0 right-0 h-12 w-12 bg-purple-200 opacity-50 rounded-full transform translate-x-6 translate-y-6"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;