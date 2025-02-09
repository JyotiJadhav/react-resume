import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { skills, experiences, projects, honours, education, certifications, languages, casestudies, blogs, testimonials } from "./data";
import "./App.css";
import "react-vertical-timeline-component/style.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import TrainingAndCert from "./components/sections/TrainingAndCert";
import Languages from "./components/sections/Languages";
import Education from "./components/sections/Education";
import Honours from "./components/sections/Honours";
import Contact from "./components/sections/Contact";
import Hobbies from "./components/sections/Hobbies";
import CaseStudies from "./components/sections/CaseStudies";
import Blog from "./components/sections/Blog";
import {Chatbot} from "./components/Chatbot";
import Experience from "./components/sections/Experiance";
// Chatbot Component


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
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Experience Section */}
      <Experience experiences={experiences} />

      {/* Projects Section */}
      <Projects />

      {/* Training & Certifications Section */}
      <TrainingAndCert certifications={certifications} />

      {/* Language Skills Section */}
      <Languages languages={languages} />

      {/* Education Section */}
      <Education education={education} />ß

      {/* Honours & Awards Section */}
      <Honours honours={honours} />

      {/* Contact Section */}
      <Contact />

      {/* Hobbies/Passions Section */}
      <Hobbies />

      {/* Case Studies Section */}
      <CaseStudies casestudies={casestudies} />

      {/* Blog Section */}
      <Blog blogs={blogs} testimonials={testimonials} />

      {/* Chatbot */}
      <Chatbot />

    </div>
  );
};

export default App;
