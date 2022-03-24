import './App.css';
// import Intro from './components/Intro/Intro';
// import Navbar from './components/Navbar/navbar';
import PortfolioContainer from './components/PortfolioContainer';
// import About from './components/about/About';
// import ProjectSection from "./components/project_section/project_section";
// import Contact from './components/contact/contact'

function App() {
  return (
    <div className="app">
        <PortfolioContainer/>
        {/* <Navbar sticky="top" /> */}
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