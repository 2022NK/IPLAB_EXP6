import React from 'react';
import { ArrowRight, Code, Globe, Users } from 'lucide-react';
import Webdevimage from './web_devlopment.jpeg';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Home = () => (
  <div className="bg-gray-100">
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Profile</h1>
            <p className="text-xl mb-6">Crafting digital experiences that inspire and innovate.</p>
            <a href="#contact" className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
              Get in Touch
            </a>
          </div>
          <div className="md:w-1/2">
            <img src={Webdevimage} alt="Web Development" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What I Bring to the Table</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code size={40} />}
            title="Clean, Efficient Code"
            description="I write maintainable, scalable code that follows best practices and industry standards."
          />
          <FeatureCard
            icon={<Globe size={40} />}
            title="Responsive Design"
            description="Creating seamless experiences across all devices is at the heart of my development process."
          />
          <FeatureCard
            icon={<Users size={40} />}
            title="Collaborative Approach"
            description="I believe in open communication and teamwork to bring the best results to every project."
          />
        </div>
      </div>
    </section>
    
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Project?</h2>
        <p className="text-xl mb-8">Let's collaborate and turn your vision into reality.</p>
        <a href="/contact" className="bg-white text-blue-500 py-3 px-8 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Get in Touch
        </a>
      </div>
    </section>
  </div>
);

export default Home;