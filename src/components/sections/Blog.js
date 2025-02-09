import React from 'react';
import Slider from 'react-slick';

const Blog = ({ blogs, testimonials }) => {
    return (
        <>
            <section id="blog" className="py-16 bg-gradient-to-r from-blue-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                        Blog
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, idx) => (
                            <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
                                <h3 className="text-xl font-bold text-gray-700">{blog.title}</h3>
                                <p className="text-gray-500 mt-2">{blog.summary}</p>
                                <a
                                    href={blog.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-500 hover:underline mt-4 block"
                                >
                                    Read More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="testimonials" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                        Testimonials
                    </h2>
                    <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="bg-white shadow-lg rounded-lg p-8 text-center">
                                <p className="text-lg italic text-gray-700">"{testimonial.message}"</p>
                                <h3 className="text-xl font-bold text-gray-800 mt-4">{testimonial.name}</h3>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Blog;