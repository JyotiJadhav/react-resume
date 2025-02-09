
import React from "react";
import img1 from "../jyoti.JPG";
import back from "../back.jpg";
import "./FlipCard.css";

const FlipCard = () => {
  
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        {/* Front Side */}
        <div className="flip-card-front">
          <div className="w-full h-28 overflow-hidden rounded-t-lg">
            <img src={back} alt="Cover background" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-center -mt-14">
            <img
              className="w-24 h-24 border-4 border-white rounded-full"
              src={img1}
              alt="Jyoti Jadhav"
            />
          </div>
          <div className="px-6 py-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Jyoti Jadhav</h3>
            <p className="text-sm text-gray-600">Software Developer</p>
            <p className="mt-2 text-gray-500">
              Experienced Software Developer with a demonstrated history of working in the computer software industry.
            </p>
          </div>
        </div>
        {/* Back Side */}
        <div className="flip-card-back">
          <div className="flex flex-col items-center justify-center h-full px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <h5 className="quote">"Programmers never die, they are just cast into void"</h5>
            <div className="mt-6 space-y-4 text-center glow">
              <h4 className="text-2xl font-bold">About Me</h4>
              <p className="text-sm">
                I am a versatile full-stack developer proficient in both front-end and back-end technologies, delivering
                end-to-end solutions for a wide range of projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6 text-center glow">
              <div>
                <h4 className="text-sm font-medium uppercase">Email</h4>
                <p className="text-sm">jadhavjyotic1992@gmail.com</p>
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase">Date of Birth</h4>
                <p className="text-sm">15<sup>th</sup> August</p>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-6 glow">
              <a
                href="https://www.linkedin.com/in/jyoti-jadhav-a38479a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform hover:scale-110 transition-transform duration-300 social-icon"
              >
                <i className="fab fa-linkedin text-3xl"></i>
              </a>
              <a
                href="https://github.com/JyotiJadhav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform hover:scale-110 transition-transform duration-300 social-icon"
              >
                <i className="fab fa-github text-3xl"></i>
              </a>
              <a
                href="https://www.cakeresume.com/jyoti-jadhav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transform hover:scale-110 transition-transform duration-300 social-icon"
              >
                <i className="fas fa-link text-3xl"></i>
              </a>
            </div>
            <button className="mt-6 px-6 py-2 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-purple-100 transition duration-300 glow">
              Contact Me
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;