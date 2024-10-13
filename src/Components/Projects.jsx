import React from 'react';

const ProjectCard = ({ title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-4">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Projects = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-4">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard
        title="E-mart"
        description="A full-stack e-commerce solution built with React and Node.js."
      />
      <ProjectCard
        title="Task Management App"
        description="A productivity app created using React Native and Firebase."
      />
      <ProjectCard
        title="Expense Tracker"
        description="A webapp to calculate expenses of user  using ReactJS and Firebase."
      />
      <ProjectCard
        title="News api"
        description="Basic web app based on MERN Stack to show all Categories News to user"
      />
    </div>
  </div>
);

export default Projects;