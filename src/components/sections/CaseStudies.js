import React from 'react';
const CaseStudies = ({casestudies}) => {
    return (
 
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
    )};
export default CaseStudies;