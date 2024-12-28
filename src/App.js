
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about'
import { PopularRecipes } from './components/PopularRecipes';

function App() {
  const title ="InstaBite"
  return (
    <><div className="min-h-screen bg-white">


      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>

            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>

    </div><main className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-6 px-4">
          </div>
        </header>
        <PopularRecipes />
      </main></>
  );
}

export default App;
