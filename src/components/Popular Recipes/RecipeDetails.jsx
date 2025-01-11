import React from 'react';
import { useParams } from 'react-router-dom';

const recipeData = {
  "Classic Margherita Pizza": {
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Basil leaves"],
    instructions: [
      "Preheat oven to 475°F (245°C).",
      "Spread tomato sauce over the pizza dough.",
      "Add mozzarella cheese and bake for 10-12 minutes.",
      "Top with fresh basil leaves before serving."
    ]
  },
  "Thai Green Curry": {
    ingredients: ["Green curry paste", "Coconut milk", "Chicken", "Vegetables"],
    instructions: [
      "Sauté green curry paste in a pot until fragrant.",
      "Add coconut milk and bring to a boil.",
      "Stir in chicken and vegetables, and cook until done.",
      "Serve with steamed rice."
    ]
  },
  "Chocolate Soufflé": {
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar"],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Melt chocolate and butter together.",
      "Whisk eggs and sugar until fluffy, then fold into chocolate mixture.",
      "Pour into ramekins and bake for 10-12 minutes."
    ]
  },
  "Mediterranean Salad": {
    ingredients: ["Lettuce", "Tomatoes", "Cucumber", "Olives", "Feta cheese", "Olive oil"],
    instructions: [
      "Chop lettuce, tomatoes, and cucumber.",
      "Mix vegetables in a large bowl.",
      "Add olives, crumbled feta cheese, and drizzle with olive oil.",
      "Toss and serve immediately."
    ]
  },
  "Beef Wellington": {
    ingredients: ["Beef fillet", "Mushrooms", "Puff pastry", "Prosciutto", "Egg yolk"],
    instructions: [
      "Sear the beef fillet until browned, then let cool.",
      "Chop mushrooms finely and sauté until dry.",
      "Wrap beef in prosciutto, spread with mushrooms, and wrap in puff pastry.",
      "Brush with egg yolk and bake at 400°F (200°C) for 35-40 minutes."
    ]
  },
  "Sushi Roll Platter": {
    ingredients: ["Sushi rice", "Nori sheets", "Fish or vegetables", "Soy sauce"],
    instructions: [
      "Cook sushi rice and let it cool slightly.",
      "Place a nori sheet on a bamboo mat and spread rice evenly.",
      "Add fish or vegetables, roll tightly, and slice into pieces.",
      "Serve with soy sauce."
    ]
  }
};

export function RecipeDetails() {
  const { recipeName } = useParams();
  const decodedRecipeName = decodeURIComponent(recipeName);
  const recipe = recipeData[decodedRecipeName];

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Recipe not found</h1>
        <p className="text-gray-600">The recipe you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{decodedRecipeName}</h1>
      <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <ol className="list-decimal list-inside">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
