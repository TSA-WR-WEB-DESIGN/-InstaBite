
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about'
import Home from './home'


function App() {
  const title ="InstaBite"
  return (
    <div className="min-h-screen bg-white">


      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>

   
      </div>
  );
}

export default App;
