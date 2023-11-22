// mealPlanning.js
class MealPlanning {
  constructor(mealPlanningStub) {
    this.mealPlanningStub = mealPlanningStub;
  }

  generateAndDisplayMealPlan() {
    console.log('Generating meal plan...');
    const numberOfMeals = parseInt(document.getElementById('numberOfMeals').value, 10);
    const userPreferences = {
      numberOfMeals: numberOfMeals,
    };
    const mealPlan = this.mealPlanningStub.generateMealPlan(userPreferences);
    this.displayMealPlan(mealPlan);
  }

  suggestAndDisplayRecipes() {
    const mealPlan = this.getDisplayedMealPlan();
    const suggestedRecipes = this.mealPlanningStub.suggestRecipes(mealPlan);
    this.displaySuggestedRecipes(suggestedRecipes);
  }

  displayMealPlan(mealPlan) {
    document.getElementById('mealPlan').innerHTML = `<h2>Generated Meal Plan:</h2><ul>${mealPlan.map(meal => `<li>${meal}</li>`).join('')}</ul>`;
  }

  getDisplayedMealPlan() {
    return [...document.getElementById('mealPlan').getElementsByTagName('li')].map(li => li.textContent);
  }

  displaySuggestedRecipes(suggestedRecipes) {
    document.getElementById('suggestedRecipes').innerHTML = `<h2>Suggested Recipes:</h2><ul>${suggestedRecipes.map(recipe => `<li>${recipe}</li>`).join('')}</ul>`;
  }
}

// instance of MealPlanning with MealPlanningStub
const mealPlanning = new MealPlanning(mealPlanningStub);
