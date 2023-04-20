function dishes(recipe, ingredients) {
  let maxDishes = Infinity; // initial maximum number of dishes to infinity

  for (let ingredient in recipe) {
    // ingredient is present in available ingredients
    if (!ingredients.hasOwnProperty(ingredient)) {
      return 0; // ingredient is not present, return 0 dishes
    }

    // Calculate the maximum number
    const availableQuantity = ingredients[ingredient];
    const requiredQuantity = recipe[ingredient];
    const numDishes = Math.floor(availableQuantity / requiredQuantity);
    maxDishes = Math.min(maxDishes, numDishes);
  }

  return maxDishes;
}

const maxDishes = dishes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
console.log("Maximum number of dishes: ", maxDishes);

const maxDishes2 = dishes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
console.log("Maximum number of dishes in second: ", maxDishes2);