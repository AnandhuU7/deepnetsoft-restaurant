import React from 'react';
import './BrunchCocktails.css';

const cocktails = [
  {
    name: "Cinnamon Toast Crunch",
    image: "/cocktail1.jpg",
    ingredients: "Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon",
    price: 16,
  },
  {
    name: "Mimosa Royale",
    image: "/cocktail2.jpg",
    ingredients: "Champagne, orange juice, Grand Marnier",
    price: 18,
  },
  {
    name: "Bloody Mary",
    image: "/cocktail3.jpg",
    ingredients: "Vodka, tomato juice, Worcestershire sauce, hot sauce, celery salt, pepper",
    price: 14,
  },
];

function BrunchCocktails() {
  return (
    <div className="container"> 
      <h1 className="title">BRUNCH COCKTAILS</h1>
    <div className="container-cocktails">
      {cocktails.map((cocktail) => (
        <div key={cocktail.name} className="cocktail"> 
          <div className="cocktail-name">{cocktail.name}</div>
          <div className="cocktail-price">${cocktail.price}</div>
          <div className="cocktail-details">{cocktail.ingredients}</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default BrunchCocktails;