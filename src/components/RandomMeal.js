import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

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
  youtubeLink: "",
  thumbnail: ""
}

const RandomMeal = () => {
  const [meal, setMeal] = useState(initialMeal);

  const fetchRandomMeal = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res => {
        setMeal(mapResponseToMeal(res.data.meals[0]));
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return (
    <>
      {/* <button onClick={fetchRandomMeal}>Generate a new meal</button> */}
      <Card>
        <Card.Header>
          <Card.Title>
            Random Meal
          </Card.Title>
          <Card.Subtitle>{meal.mealName}</Card.Subtitle>
        </Card.Header>
        <Card.Img variant="top" src={`${meal.thumbnail}/preview`} />
        <Card.Body>
          <ul>
            {meal.ingredients.map((ingredient, index) => {
              return (<li key={index}>{ingredient.measure} {ingredient.ingredient}</li>)
            })}
          </ul>
          <h3>Instructions</h3>
          <p>{meal.instructions}</p>
        </Card.Body>
      </Card>
    </>
  )
}

export default RandomMeal;