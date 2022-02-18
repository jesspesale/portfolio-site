import './App.css';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'

function App() {
  return (
    <div className="app">
      <Navbar sticky="top" />
      <div className="sections">
        <Intro/>
        <About className="section"/>
        <Projects className="section"/>
        <Contact className="section"/>
      </div>
    </div>
  );
}

export default App;
