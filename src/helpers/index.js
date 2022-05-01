export const mapResponseToMeal = mealResponse => {
  // create an ingredient / measurement array
  const ingredients = [];
  Object.entries(mealResponse).forEach(([key, value], index) => {
    if (value && /ingredient/i.test(key)) {
      const ingredientNumber = key.split(/strIngredient/i)[1];
      ingredients.push({ ingredient: value, measure: mealResponse[`strMeasure${ingredientNumber}`]})
    }
  });

  return {
    mealId: mealResponse.idMeal,
    mealName: mealResponse.strMeal,
    instructions: mealResponse.strInstructions,
    area: mealResponse.strArea,
    category: mealResponse.strCategory,
    ingredients: ingredients,
    source: mealResponse.strSource,
    tags: mealResponse.strTags,
    youtubeLink: mealResponse.strYoutube
  }
}
