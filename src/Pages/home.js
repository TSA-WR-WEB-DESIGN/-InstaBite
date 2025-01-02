import React from 'react';
import FeaturedCardProps from '../components/FeaturedCardProps';  
import JoinCommunity from '../components/JoinCommunity';
import { PopularRecipes } from '../components/Popular Recipes/PopularRecipes';
import FooterSection from '../components/Footer/FooterSection';
import { CategoryGrid } from '../components/CategoryGrid';
import A from '../components/A'; // Updated import statement

export default function Home() {
  return (
    <>
      <A />

      <FeaturedCardProps />

      <PopularRecipes />

      <CategoryGrid />

      <JoinCommunity />

      <FooterSection />
    </>
  );
}