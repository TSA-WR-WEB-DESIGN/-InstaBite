import React from 'react';
import Hero from '../components/Hero';
import RecipeFinder from '../components/RecipeFinder';
import FeaturedRecipes from '../components/FeaturedRecipes';

export default function Home() {
  return (
    <>
      <Hero />
      <RecipeFinder />
      <FeaturedRecipes />
    </>
  );
}const Home = () => {
    return ( 
        <div className="home">
            <h2>Homepage</h2>
        </div>
    );
}
 
export default Home;