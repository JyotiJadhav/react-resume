import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
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
    );
};

export default Contact;