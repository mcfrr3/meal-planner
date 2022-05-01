import { useEffect, useState } from 'react';
import axios from 'axios';

import { mapResponseToMeal } from '../helpers'

const initialMeal = {
  mealId: "",
  mealName: "",
  instructions: [],
  area: "",
  category: "",
  ingredients: [],
  source: "",
  tags: [],
  youtubeLink: ""
}

const RandomMeal = () => {
  const [meal, setMeal] = useState(initialMeal);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => {
        setMeal(mapResponseToMeal(res.data.meals[0]));
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div>
      <h1>Random Meal</h1>
      <h2>{meal.mealName}</h2>
      <ul>
        {meal.ingredients.map((ingredient, index) => {
          return (<li key={index}>{ingredient.measure} {ingredient.ingredient}</li>)
        })}
      </ul>
      <h3>Instructions</h3>
      <p>{meal.instructions}</p>
    </div>
  )
}

export default RandomMeal;