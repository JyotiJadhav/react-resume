import React from 'react';
import FlipCard from '../FlipCard';

const Hero = () => {
    return (
        <section className="hero bg-gradient-to-r from-purple-600 to-blue-500 text-white py-32 px-6 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute w-64 h-64 bg-purple-400 rounded-full -top-32 -left-32 opacity-20 animate-blob"></div>
                <div className="absolute w-72 h-72 bg-blue-400 rounded-full -bottom-32 -right-32 opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in">
                    Hello, I'm <span className="text-cyan-200">Jyoti Jadhav</span>
                </h1>
                <div className="animate-fade-in animation-delay-1000">
                    <FlipCard />
                </div>
            </div>
        </section>
    );
};

export default Hero;