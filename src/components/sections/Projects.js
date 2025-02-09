import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="relative w-full h-64 perspective group">
                        <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                            <div className="absolute inset-0 bg-white shadow-lg rounded-lg p-6 backface-hidden">
                                <h3 className="text-xl font-bold text-purple-600">Full stack development</h3>
                                <p className="text-sm text-gray-500 mt-2">Crafting dynamic and responsive web applications.</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-lg rounded-lg p-6 rotate-y-180 backface-hidden">
                                <p>
                                    As a Full Stack Developer, I excel in delivering comprehensive web solutions that bridge the gap between front-end and back-end functionalities. My expertise in C#, .NET Core, and React allows me to create engaging user experiences while ensuring robust server-side operations. I focus on implementing best practices in code quality, scalability, and performance. Whether it’s developing intricate dashboards for the pharmaceutical industry or integrating logistics solutions, my approach is always user-centric. I leverage Agile methodologies to adapt to changing requirements and ensure timely delivery of high-quality software that meets client expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;