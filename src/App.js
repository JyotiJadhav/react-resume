import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import AOS from "aos";
import { skills, experiences, projects, honours, education, certifications, languages, casestudies , blogs, testimonials} from "./data";
import "./App.css";
import img1 from "./jyoti.JPG";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { askOpenAI } from "./openaiHelper"; // OpenAI helper function

// Chatbot Component
const Chatbot = () => {
  const [aiResponse, setAIResponse] = useState("");

  const steps = [
    {
      id: "1",
      message: "Hi! Welcome to my portfolio. How can I assist you today?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: "projects", label: "Tell me about your projects", trigger: "projects" },
        { value: "skills", label: "What skills do you have?", trigger: "skills" },
        { value: "contact", label: "How can I contact you?", trigger: "contact" },
        { value: "general", label: "I have a general question", trigger: "ask-question" },
      ],
    },
    {
      id: "projects",
      message: "Here are some of my key projects:",
      trigger: "dynamic-projects",
    },
    {
      id: "dynamic-projects",
      component: (
        <div>
          {projects.map((project, idx) => (
            <p key={idx}>
              <strong>{project.title}:</strong> {project.description}
            </p>
          ))}
        </div>
      ),
      asMessage: true,
      trigger: "6",
    },
    {
      id: "skills",
      component: (
        <div>
          {Object.keys(skills).map((category, idx) => (
            <p key={idx}>
              <strong>{category}:</strong> {skills[category].join(", ")}
            </p>
          ))}
        </div>
      ),
      asMessage: true,
      trigger: "6",
    },
    {
      id: "contact",
      message: "You can reach me at: jadhavjyotic1992@gmail.com",
      trigger: "6",
    },
    {
      id: "ask-question",
      message: "Please type your question below.",
      trigger: "user-question",
    },
    {
      id: "user-question",
      user: true,
      validator: async (value) => {
        try {
          const response = await askOpenAI(value);
          setAIResponse(response); // Store the response
          return true;
        } catch (error) {
          console.error("Error fetching OpenAI response:", error);
          setAIResponse("Sorry, there was an issue with the chatbot.");
          return true;
        }
      },
      trigger: "ai-response",
    },
    {
      id: "ai-response",
      message: () => aiResponse, // Use the dynamically updated state
      trigger: "6",
    },
    {
      id: "6",
      message: "Is there anything else I can help you with?",
      trigger: "2",
    },
  ];

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Arial, sans-serif",
    headerBgColor: "#6c63ff",
    headerFontColor: "#fff",
    headerFontSize: "16px",
    botBubbleColor: "#6c63ff",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} />
    </ThemeProvider>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <span className="text-xl font-bold">Jyoti Jadhav</span>
          <div className="space-x-4">
            <a href="#skills" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Skills
            </a>
            <a href="#experience" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Experience
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Projects
            </a>
            <a href="#training" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Training & Certifications
            </a>
            <a href="#languages" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Language
            </a>
            <a href="#education" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Education
            </a>
            <a href="#honours" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Honours & Awards
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500 transition duration-300">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-center md:text-left py-40 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        <div className="relative z-10 flex flex-col md:flex-row-reverse items-center md:items-start max-w-7xl mx-auto">
          {/* Profile Image */}
          <div
            className="flex-shrink-0 w-40 h-40 md:w-60 md:h-60 bg-white rounded-full shadow-lg overflow-hidden border-4 border-cyan-300"
            data-aos="fade-left"
          >
            <img
              src={img1} // Replace with the actual URL of your photo
              alt="Jyoti Jadhav"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hero Content */}
          <div className="mt-8 md:mt-0 md:mr-12 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              Hello, I'm <span className="text-cyan-200">Jyoti Jadhav</span>
            </h1>
            <p className="text-lg md:text-2xl font-light">
              A
              <span className="font-medium text-purple-200"> Software Developer</span>
              delivering innovative solutions for <span className="text-cyan-300">8+ years</span>.
            </p>
            <div className="mt-8 space-x-4">
              <a
                href="#about"
                className="px-6 py-3 bg-white text-purple-700 font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
              >
                About Me
              </a>
              <a
                href="#portfolio"
                className="px-6 py-3 bg-cyan-500 font-bold rounded-lg shadow-md hover:bg-cyan-600 transition"
              >
                See My Work
              </a>
            </div>
          </div>
        </div>

        {/* Floating Animations */}
        <div
          className="absolute -bottom-10 right-10 h-24 w-24 bg-purple-400 opacity-70 rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-10 left-20 h-36 w-36 bg-cyan-300 opacity-60 rounded-full animate-pulse"
          style={{ animationDuration: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-20 left-10 h-16 w-16 bg-white opacity-40 rounded-full animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-32 right-32 h-32 w-32 bg-cyan-500 opacity-50 rounded-full animate-pulse"
          style={{ animationDuration: "5s" }}
        ></div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up">
            My Skills
          </h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.keys(skills).map((category, idx) => (
              <div
                key={idx}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden p-6 transform transition-transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={`${idx * 100}`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full shadow-md">
                    {/* Relevant Icon */}
                    {category === "Programming Languages" && <i className="fas fa-code"></i>}
                    {category === "Frameworks" && <i className="fas fa-layer-group"></i>}
                    {category === "Tools" && <i className="fas fa-wrench"></i>}
                    {category === "Databases" && <i className="fas fa-database"></i>}
                    {category === "Soft Skills" && <i className="fas fa-users"></i>}
                    {category === "Technologies" && <i className="fas fa-laptop-code"></i>}
                    {category === "Cloud" && <i className="fas fa-cloud"></i>}
                    {category === "Project Management" && <i className="fas fa-tasks"></i>}
                  </div>
                  <h3 className="text-2xl font-bold text-purple-600">{category}</h3>
                </div>

                {/* Skill List */}
                <ul className="space-y-3">
                  {skills[category].map((skill, i) => (
                    <li key={i} className="flex items-center space-x-3 text-gray-700">
                      <span className="flex items-center justify-center w-4 h-4 bg-cyan-500 rounded-full"></span>
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Icon */}
                <div className="absolute bottom-0 right-0 h-12 w-12 bg-purple-200 opacity-50 rounded-full transform translate-x-6 translate-y-6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up">
            My Journey
          </h2>
          <VerticalTimeline>
            {experiences.map((exp, idx) => (
              <VerticalTimelineElement
                key={idx}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.9)",
                  color: "#333",
                  borderRadius: "15px",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.3)"
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(255, 255, 255, 0.9)"
                }}
                date={exp.duration}
                iconStyle={{
                  background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                  color: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                icon={<i className="fas fa-briefcase text-2xl"></i>}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold text-gray-800">{exp.title}</h3>
                <h4 className="vertical-timeline-element-subtitle text-lg italic text-gray-600">{exp.company}</h4>
                <p className="text-base mt-2 text-gray-700">{exp.description.join(", ")}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Training & Certifications Section */}
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

      {/* Language Skills Section */}
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

      {/* Education Section */}
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

      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600">
            I’d love to connect! Whether it’s a professional inquiry or a casual chat, here’s how you can reach me.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {/* Email */}
            <a
              href="mailto:jadhavjyotic1992@gmail.com"
              className="flex items-center px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4zm0 2.2v9.8h16V8.2l-8 5.8L4 8.2z" />
              </svg>
              Email Me
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jyoti-jadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-800 text-white font-bold rounded-lg shadow-lg hover:bg-gray-900 transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8c2.4 0 4 1.7 4 4.3V19h-3.3v-6.2c0-1.1-.6-2-1.7-2s-2 1-2 2.3V19H9.7V9h3v1.3c.6-.8 1.8-1.3 3-1.3zM6.6 19H3.4V9h3.3v10zm-1.7-11.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" />
              </svg>
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-700 text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.19 6.84 9.51.5.09.68-.22.68-.49v-1.73c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1.01.07 1.54 1.04 1.54 1.04.89 1.54 2.34 1.09 2.91.83.09-.64.35-1.1.63-1.36-2.22-.25-4.56-1.11-4.56-4.96 0-1.1.39-1.99 1.03-2.69-.1-.26-.45-1.29.1-2.7 0 0 .84-.27 2.75 1.02A9.42 9.42 0 0 1 12 6.8c.85.004 1.7.11 2.5.33 1.9-1.29 2.75-1.02 2.75-1.02.55 1.41.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.71-4.56 4.96.36.31.68.92.68 1.85v2.74c0 .27.18.59.69.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>

            {/* Resume */}
            <a
              href="/path-to-resume.pdf"
              download="Jyoti_Jadhav_Resume.pdf"
              className="flex items-center px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-3-3m3 3l3-3m-9 7h12a2 2 0 002-2v-7a2 2 0 00-2-2h-3.586a2 2 0 01-1.414-.586l-2-2A2 2 0 009.586 4H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Download Resume
            </a>

          </div>
        </div>
      </section>
      {/* Hobbies/Passions Section */}
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
<section id="case-studies" className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
      Case Studies
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {casestudies.map((project, idx) => (
        <div
          key={idx}
          className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col"
        >
          <h3 className="text-xl font-bold text-purple-600">{project.title}</h3>
          <p className="text-gray-500 mt-2">{project.description}</p>
          <a
            href={project.caseStudyLink} // Link to detailed case study
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-cyan-500 hover:underline"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

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
      <Chatbot />

    </div>
  );
};

export default App;
