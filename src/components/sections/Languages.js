import React from 'react';

const Languages = ({languages}) => {
    return (
        <section id="languages" className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up">
                    Language Skills
                </h2>
                <div className="space-y-6 max-w-lg mx-auto">
                    {languages.map((lang, idx) => (
                        <div key={idx} data-aos="fade-up" data-aos-delay={`${idx * 100}`}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-lg font-bold text-purple-600">{lang.language}</span>
                                <span className="text-gray-500">{lang.level}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-4">
                                <div
                                    className={`h-4 rounded-full ${lang.level === "C1"
                                        ? "bg-cyan-500 w-10/12"
                                        : lang.level === "A1"
                                            ? "bg-purple-500 w-4/12"
                                            : "bg-gray-300"
                                        }`}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Languages;