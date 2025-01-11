import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Pages/home';
import Recipes from './Recipes';
import About from './Pages/about';
import { CategoryGrid } from './components/CategoryGrid';
import { RecipeList } from './components/RecipeList';
import MainApp from './components/A'; // Updated import statement



export const App = () => {
  return <MainApp />;
};

function Main() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<CategoryGrid />} />
          <Route path="/recipes/:level" element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;