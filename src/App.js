import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/navbar';
// import About from './components/about/About';
// import ProjectSection from "./components/project_section/project_section";
// import Contact from './components/contact/contact'

function App() {
  return (
    <div className="app">
      <div>
        <Navbar sticky="top" />
      </div>

    </div>
  );
}

export default App;


        // <div className="sections-container">
        //   <Intro className="section" />
        //   {/* <About className="section" />
        // <ProjectSection className="section" /> */}
        //   {/* <Contact className="section" /> */}
        // </div>;