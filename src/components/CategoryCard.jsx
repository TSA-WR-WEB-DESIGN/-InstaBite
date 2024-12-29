import React from 'react';
import { ChefHat, Utensils, Trophy } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';

function Categories() {
  const categories = [
    {
      title: 'Beginner',
      subtitle: 'Just Starting Out',
      recipeCount: 25,
      icon: <ChefHat size={24} />,
      gradient: 'bg-gradient-to-br from-teal-300 to-blue-400',
    },
    {
      title: 'Intermediate',
      subtitle: 'Getting Better',
      recipeCount: 50,
      icon: <Utensils size={24} />,
      gradient: 'bg-gradient-to-br from-purple-200 to-purple-300',
    },
    {
      title: 'Advanced',
      subtitle: 'Kitchen Pro',
      recipeCount: 75,
      icon: <Trophy size={24} />,
      gradient: 'bg-gradient-to-br from-rose-200 to-rose-300',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Level</h1>
        <p className="text-lg text-gray-600">
          Select your cooking expertise and discover recipes tailored to your skills
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            {...category}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;