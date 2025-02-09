import React from 'react';

const Education = ({ education }) => {
    return (
        <section id="education" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up">
                    Education
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                            data-aos="fade-up"
                            data-aos-delay={`${idx * 100}`}
                        >
                            {/* Badge Icon */}
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-cyan-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                                <i className="fas fa-graduation-cap text-white"></i>
                            </div>

                            {/* Degree */}
                            <h3 className="text-xl font-bold text-purple-600 flex items-center">
                                <i className="fas fa-graduation-cap text-purple-500 mr-2"></i>
                                {edu.degree}
                            </h3>

                            {/* University */}
                            <p className="text-gray-600 mt-2 flex items-center">
                                <i className="fas fa-university text-purple-500 mr-2"></i>
                                {edu.university}
                            </p>

                            {/* Year */}
                            <p className="mt-4 text-sm text-gray-500 flex items-center">
                                <i className="fas fa-calendar-alt text-cyan-500 mr-2"></i>
                                {edu.year}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;