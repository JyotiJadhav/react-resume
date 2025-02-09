import React from 'react';

const Honours = ({ honours }) => {
    return (
        <section id="honours" className="py-16 bg-gradient-to-b from-gray-100 via-white to-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up">
                    Honours & Awards
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {honours.map((honour, idx) => (
                        <div
                            key={idx}
                            className="relative bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                            data-aos="flip-left"
                            data-aos-delay={`${idx * 100}`}
                        >
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-1 px-4 rounded-full shadow">
                                {honour.year}
                            </div>
                            <div className="flex justify-center items-center bg-gradient-to-br from-cyan-500 to-purple-500 w-16 h-16 rounded-full mx-auto mb-4 shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 8c1.104 0 2 .672 2 1.5S13.104 11 12 11s-2-.672-2-1.5S10.896 8 12 8zm-4 6.5c0-.828.672-1.5 1.5-1.5S11 13.672 11 14.5 10.328 16 9.5 16 8 15.328 8 14.5zm8.5-1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 text-center mb-2">{honour.title}</h3>
                            <p className="text-sm text-gray-600 text-center">{honour.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Honours;