import React from 'react';

const Hobbies = () => {
    return (
        <section id="hobbies" className="py-16 bg-gradient-to-r from-blue-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                    Hobbies & Passions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Hobby: Reading */}
                    <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <i className="fas fa-book text-4xl text-blue-500 mb-4"></i>
                        <h3 className="text-xl font-bold text-gray-700">Reading</h3>
                        <p className="text-gray-500 mt-2 text-center">
                            Immersing myself in novels, articles, and anything that broadens my perspective.
                        </p>
                    </div>
                    {/* Hobby: Writing */}
                    <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <i className="fas fa-pen-nib text-4xl text-green-500 mb-4"></i>
                        <h3 className="text-xl font-bold text-gray-700">Writing</h3>
                        <p className="text-gray-500 mt-2 text-center">
                            Crafting ideas and stories to express creativity and connect with others.
                        </p>
                    </div>
                    {/* Hobby: Painting */}
                    <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <i className="fas fa-paint-brush text-4xl text-red-500 mb-4"></i>
                        <h3 className="text-xl font-bold text-gray-700">Painting</h3>
                        <p className="text-gray-500 mt-2 text-center">
                            Expressing my creativity through vibrant colors and imaginative artwork.
                        </p>
                    </div>
                    {/* Hobby: Learning New Technologies */}
                    <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <i className="fas fa-laptop-code text-4xl text-purple-500 mb-4"></i>
                        <h3 className="text-xl font-bold text-gray-700">Learning New Technologies</h3>
                        <p className="text-gray-500 mt-2 text-center">
                            Staying updated with the latest innovations and trends in the tech world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;