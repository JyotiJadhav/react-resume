import React from "react";
import img1 from "../jyoti.JPG";
import back from "../back.jpg";
import "./FlipCard.css";

const FlipCard = () => {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        {/* Front Side */}
        <div className="flip-card-front bg-white">
          <div className="relative h-32">
            <img
              src={back}
              alt="Banner"
              className="w-full h-full object-cover rounded-t-2xl"
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
              <img
                src={img1}
                alt="Jyoti Jadhav"
                className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>
          </div>

          <div className="pt-16 pb-4 px-4 text-center">
            <h2 className="text-xl font-bold text-purple-700">Jyoti Jadhav</h2>
            <p className="text-sm font-medium text-purple-500 mb-2">
              Full Stack Developer | Cloud & Data Enthusiast
            </p>
            <p className="text-gray-700 text-sm mb-4">
              Passionate about building scalable web applications and robust data solutions.
            </p>

            <div className="strengths-section">
              <div className="strengths-header-card">
                <i className="fas fa-cogs"></i>
                <span>Strengths in Action</span>
              </div>
              <div className="strengths-list">
                <div className="strength-item">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>
                    Automated <strong>80%</strong> of report migration, reducing estimation time by <strong>50%</strong>.
                  </span>
                </div>
                <div className="strength-item">
                  <i className="fas fa-desktop"></i>
                  <span>
                    Designed interactive UI elements using <strong>Framer Motion</strong>.
                  </span>
                </div>
                <div className="strength-item">
                  <i className="fas fa-bug"></i>
                  <span>
                    Resolved <strong>critical blocking issues</strong>, ensuring smooth execution.
                  </span>
                </div>
                <div className="strength-item">
                  <i className="fas fa-vial"></i>
                  <span>
                    Achieved <strong>high code coverage</strong> through rigorous testing.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back bg-white text-gray-800">
          <div className="flex flex-col justify-center items-center h-full px-6 py-6 text-center">
            <p className="italic text-sm text-gray-500 mb-4">
              "Code is not just instructions — it's craftsmanship."
            </p>

            <div>
              <h4 className="text-xl font-bold text-purple-700 mb-2">About Me</h4>
              <p className="text-sm text-gray-700">
                I'm a passionate software developer with a strong foundation in full-stack development, cloud engineering, and data-driven architecture. I thrive on solving complex problems and creating scalable, maintainable systems that deliver real business value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 text-sm w-full">
              <div>
                <h4 className="text-xl font-bold text-purple-700 mb-2">
                  <i className="fas fa-envelope text-purple-600 text-lg"></i> Email
                </h4>
                <p className="text-gray-700">jadhavjyotic1992@gmail.com</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-purple-700 mb-2">
                  <i className="fas fa-map-marker-alt text-purple-500"></i> Location
                </h4>
                <p className="text-gray-700">Pune, India</p>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-6">
              <a href="https://www.linkedin.com/in/jyoti-jadhav-a38479a3/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://github.com/JyotiJadhav" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://www.cakeresume.com/jyoti-jadhav" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-link text-2xl"></i>
              </a>
            </div>

            <button className="mt-6 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;