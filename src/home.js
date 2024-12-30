import React from 'react';



import  JoinCommunity  from './components/JoinCommunity';

import { PopularRecipes } from './components/PopularRecipes';
import FooterSection from './components/Footer/FooterSection';





export default function Home() {
  return (
    <>
      <PopularRecipes />
      <JoinCommunity />
      <FooterSection />

      
    </>
  );
}
 
