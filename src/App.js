import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const Navbar = ({ toggleMenu }) => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">Niraj Kothawade</Link>
      <div className="hidden md:flex space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <button onClick={toggleMenu} className="md:hidden text-white">
        <Menu />
      </button>
    </div>
  </nav>
);

const NavLink = ({ to, children }) => (
  <Link to={to} className="text-white hover:text-gray-300">{children}</Link>
);

const MobileMenu = ({ isOpen, toggleMenu }) => (
  <div className={`fixed inset-0 z-50 bg-gray-800 ${isOpen ? 'block' : 'hidden'} md:hidden`}>
    <div className="flex justify-end p-4">
      <button onClick={toggleMenu} className="text-white">
        <X />
      </button>
    </div>
    <div className="flex flex-col items-center space-y-4 mt-16">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto px-4 flex justify-center space-x-4">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
        <ExternalLink size={24} />
        <span className="sr-only">GitHub</span>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
        <ExternalLink size={24} />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="mailto:john@example.com" className="hover:text-gray-300">
        <ExternalLink size={24} />
        <span className="sr-only">Email</span>
      </a>
    </div>
  </footer>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar toggleMenu={toggleMenu} />
        <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <main className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;