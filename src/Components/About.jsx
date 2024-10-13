import React from 'react';
import Profile_image from './profile_img.png';
import { ArrowRight, Code, Globe, Users } from 'lucide-react';

const About = () => (
  <div className>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Bringing Ideas to Life Through Code</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={Profile_image} alt="John Doe" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Hi, I'm John Doe, a passionate full-stack developer with 5 years of experience in creating robust and scalable web applications. My journey in the world of programming has been driven by a relentless curiosity and a desire to solve complex problems through elegant code.
            </p>
            <p className="text-lg mb-4">
              From front-end design to back-end architecture, I love every aspect of bringing a digital product to life. My expertise spans across various technologies, allowing me to craft tailored solutions for each unique project.
            </p>
            <a href="/about" className="text-blue-500 font-semibold hover:text-blue-600 transition duration-300 flex items-center">
              Learn more about my journey <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
    <h3 className="text-2xl font-bold mb-2">Skills</h3>
    <ul className="list-disc list-inside">
      <li>JavaScript (React, Node.js)</li>
      <li>Python (Django)</li>
      <li>SQL and NoSQL databases</li>
      <li>DevOps (Docker, CI/CD)</li>
    </ul>
  </div>
);

export default About;