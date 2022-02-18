import './App.css';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div><Intro></Intro></div>
    </div>
  );
}

export default App;
