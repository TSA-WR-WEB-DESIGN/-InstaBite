import React from 'react';



import  JoinCommunity  from './components/JoinCommunity';

import { PopularRecipes } from './components/PopularRecipes';
import FooterSection from './components/Footer/FooterSection';
import { CategoryGrid } from './components/CategoryGrid';





export default function Home() {
  return (
    <>
      <PopularRecipes />

      <CategoryGrid />

      <JoinCommunity />
      
      <FooterSection />

      
    </>
  );
}
 
