import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import {initialMealChoice} from '../helpers/initialMealChoice'
import {useNavigate} from 'react-router-dom'


function CategorySearch(props) {
  const [categories, setCategories] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const navigate = useNavigate()

  const { setChosenMeal, title, setTitle} = props
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
    setTitle(category.strCategory)
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
      )
      .then((res) => {
        setCategoryList(res.data.meals);
        setChosenMeal(initialMealChoice)
      })
      .catch((err) => {
        console.log({ err });
      });
  };

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
        <div>
        <h2>{title}</h2>
        </div>
      {categoryList && (
        <div className="categoryList">
          {categoryList.map((meal) => {
            return (
              <div className="categoryMeals" key={meal.idMeal}>
                <Card onClick={()=> navigate(`/meals/${meal.idMeal}`)}>
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
    </div>
  );
}

export default CategorySearch;
