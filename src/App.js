import './App.css';
import { Routes, Route } from "react-router-dom";
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/navbar';
// import About from './components/about/About';
import ProjectSection from "./components/project_section/project_section";
// import Contact from './components/contact/contact'

function App() {
  return (
    <div className="app">
      <Navbar sticky="top" />
      <div className="sections-container">
        <Intro className="section" />
        {/* <About className="section" />
        <ProjectSection className="section" /> */}
        {/* <Contact className="section" /> */}
      </div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/projects" element={<ProjectSection />} />
      </Routes>
    </div>
  );
}

export default App;


  