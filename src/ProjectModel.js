import React, { useState } from "react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h2>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">{project.description}</p>
          <ul className="list-disc pl-6 text-gray-600">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <div className="mt-6 text-right">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-700 underline font-bold"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
