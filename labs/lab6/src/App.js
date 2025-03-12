import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => (
  <div className="container mt-5">
    <h1>Welcome to My Portfolio</h1>
    <p>This is the home page of my portfolio.</p>
  </div>
);

const About = () => (
  <div className="container mt-5">
    <h1>About Me</h1>
    <p>Education: Bachelor’s in Computer Science</p>
    <p>Experience: Front-End Developer Intern</p>
    <p>Skills: React, JavaScript, HTML, CSS, Bootstrap</p>
  </div>
);

const Projects = () => (
  <div className="container mt-5">
    <h1>Projects</h1>
    <p>Coming soon...</p>
  </div>
);

const NotFound = () => (
  <div className="container mt-5">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">Portfolio</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-light py-3 mt-5">
    <div className="container text-center">
      <p>&copy; 2025 My Portfolio</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

