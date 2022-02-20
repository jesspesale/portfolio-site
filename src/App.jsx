import './App.css';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import About from './components/about/about'
import ProjectSection from "./components/project_section/project_section";
import Contact from './components/contact/contact'

function App() {
  return (
    <div className="app">
      <Navbar sticky="top" />
      <div className="sections-container">
        <Intro className="section" />
        <About className="section" />
        <ProjectSection className="section" />
        <Contact className="section" />
      </div>
    </div>
  );
}

export default App;
