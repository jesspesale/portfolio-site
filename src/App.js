import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div><Intro></Intro></div>
    </div>
  );
}

export default App;
