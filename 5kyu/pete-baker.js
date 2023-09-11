

function cakes(recipe, available) {
    let maxCakes = Infinity;
     
       for (const ingredient in recipe) {
         if (!(ingredient in available)) {
           return 0; // Ingredient from recipe not available
         }
     
         const recipeAmount = recipe[ingredient];
         const availableAmount = available[ingredient];
         const possibleCakes = Math.floor(availableAmount / recipeAmount);
     
         maxCakes = Math.min(maxCakes, possibleCakes);
       }
     
       return maxCakes;
   }