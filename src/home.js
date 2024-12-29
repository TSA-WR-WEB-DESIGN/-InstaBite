import React from 'react';



import  JoinCommunity  from './components/JoinCommunity';

import { PopularRecipes } from './components/PopularRecipes';

import CategoryCard from './components/CategoryCard';



export default function Home() {
  return (
    <>
      <PopularRecipes />
      <JoinCommunity />
      <CategoryCard />

      
    </>
  );
}
 
