

// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. 
// Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) 
// and the available ingredients (also an object) and returns the maximum number of cakes 
// Pete can bake (integer). For simplicity there are no units for the amounts 
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

//cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 


function cakes(recipe, available) {
    console.log("recipe", recipe);
    console.log("available ingredients: ", available);
      let requiredIngredients = [];
      let ratiosArray = [];
      
      for(var ingredient in recipe) {
        requiredIngredients.push(ingredient);
      }
      
      console.log(requiredIngredients)
      
      for(let i = 0; i < requiredIngredients.length; i++) {
        if(!available.hasOwnProperty(requiredIngredients[i])) {
          return 0;
        }
      }
      for(var ingredient in recipe) {
        console.log("value of ingredient on this iteration is", ingredient)
            ratiosArray.push(Math.floor(available[ingredient] / recipe[ingredient]));
      }
      
      return Math.min(...ratiosArray);
      
  }