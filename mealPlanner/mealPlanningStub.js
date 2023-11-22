// mealPlanningStub.js
class MealPlanningStub {
  constructor() {}

  // implementation for generating meal plans
  generateMealPlan(userPreferences) {
    // generation of meal plan,here iam using an array to hold the data//in real database you will reference data from firebase
    const Mealspresent = ['Meal name 1', 'Meal name2', 'Meal name3', 'Meal name4', 'Meal name5'];
    const chosenMeals = [];

    for (let i = 0; i < userPreferences.numberOfMeals; i++) {
      const randomIndex = Math.floor(Math.random() * Mealspresent.length);
      chosenMeals.push(Mealspresent[randomIndex]);
    }

    return chosenMeals;
  }

  // implementation for suggesting recipes
  suggestRecipes(mealPlan) {
    //  logic for suggesting recipes
    const suggestedRecipes = mealPlan.map((meal) => `Recipe for ${meal}`);
    return suggestedRecipes;
  }
}

// Create an instance of MealPlanningStub
const mealPlanningStub = new MealPlanningStub();
