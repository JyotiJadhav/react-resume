import React from 'react';

const TrainingAndCert = ({ certifications }) => {
    return (
        <section id="training" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up">
                    Training & Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-lg rounded-lg p-6 transform hover:-translate-y-2 hover:shadow-xl transition duration-300"
                            data-aos="fade-up"
                            data-aos-delay={`${idx * 100}`}
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12l2 2 4-4m5 7a2 2 0 100-4 2 2 0 000 4zm-7 3a7 7 0 110-14 7 7 0 010 14zm0 0v.01M7 7v.01M4 4v.01"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-purple-600">{cert.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-2">{cert.institution}</p>
                            <p className="text-sm text-gray-500 italic">{cert.year}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrainingAndCert;