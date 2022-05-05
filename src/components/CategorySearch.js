import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { mapResponseToMeal } from "../helpers";

//create a grid of links for all the categories.

/* ISSUES
1. need to double click a category to get the thumbnails to repopulate.
*/

const initialMealChoice = {
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
function CategorySearch() {
  const [categories, setCategories] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [chosenMeal, setChosenMeal] = useState(initialMealChoice);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const categoryChoice = (category) => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
      )
      .then((res) => {
        setCategoryList(res.data.meals);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const mealChoice = (idMeal) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => {
        setChosenMeal(mapResponseToMeal(res.data.meals[0]));
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  console.log(chosenMeal);
  return (
    <div>
      <h1>Category Search</h1>
      <div className="searchList">
        {categories.map((category) => {
          return (
            <a
              key={category.idCategory}
              className="individualLink"
              href="#categoryList"
              onClick={() => categoryChoice(category)}
            >
              {category.strCategory}
            </a>
          );
        })}
      </div>
      {categoryList && (
        <div className="categoryList">
          {categoryList.map((meal) => {
            return (
              <div className="categoryMeals" key={meal.idMeal}>
                <Card onClick={() => mealChoice(meal.idMeal)}>
                  <Card.Header>
                    <Card.Title>{meal.strMeal}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Img
                      class="img-thumbnail"
                      src={`${meal.strMealThumb}`}
                    />
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      )}
      <div>
        {chosenMeal.mealId && (
          <div className="chosenMeal">
            <Card>
              <Card.Header>
                <Card.Title>GREAT MEAL CHOICE!</Card.Title>
                <Card.Subtitle>{chosenMeal.mealName}</Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Card.Img
                  class="img-thumbnail"
                  src={`${chosenMeal.thumbnail}/preview`}
                />
                <ul>
                  {chosenMeal.ingredients.map((ingredient, index) => {
                    return (
                      <li key={index}>
                        {ingredient.measure} {ingredient.ingredient}
                      </li>
                    );
                  })}
                </ul>
                <h3>Instructions</h3>
                <p>{chosenMeal.instructions}</p>
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategorySearch;
