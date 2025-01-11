import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Pages/home';
import Recipes from './Recipes';
import About from './Pages/about';
import Documentation from './Pages/documentation';
import { CategoryGrid } from './components/CategoryGrid';
import { RecipeList } from './components/RecipeList';
import { PopularRecipes } from './components/Popular Recipes/PopularRecipes';
import { RecipeDetails } from './components/Popular Recipes/RecipeDetails';
import MainApp from './components/A';
import Breakfast from './Pages/breakfast';
import Dinner from './Pages/dinner';
import Lunch from './Pages/lunch';

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
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/categories" element={<CategoryGrid />} />
          <Route path="/recipes/:level" element={<RecipeList />} />
          <Route path="/popular-recipes" element={<PopularRecipes />} />
          <Route path="/recipe/:recipeName" element={<RecipeDetails />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
