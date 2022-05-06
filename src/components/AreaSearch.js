import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import {initialMealChoice} from '../helpers/initialMealChoice'


/*create a grid of links for all the areas.
1. is there a way to link flags to the country names?
*/


function AreaSearch(props) {
    const [areas, setAreas] = useState([])
    const [chosenArea, setChosenArea] = useState([])

    const {chosenMeal, mealChoice, setChosenMeal, title, setTitle} = props

    useEffect(() => {
        axios
        .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then((res) => {
          setAreas(res.data.meals);
        })
        .catch((err) => {
          console.log({ err });
    })
}, [])
// console.log(areas)

    const areaSearch =(area) => {
        setChosenMeal(initialMealChoice)
        setTitle(area)
        axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        .then(res => {
            setChosenArea(res.data.meals)
            console.log(res)
        })
        .catch(err => {
            console.log({err})
        })
    }
    
    return(
        <div>
            <h1>Area Search</h1>
            <div className='searchList'>
            {
                areas.map((area, index) => 
                    <a 
                    onClick = {() => areaSearch(area.strArea)}
                    key = {index}
                    className = 'individualLink' 
                    href ='#areaList' >{area.strArea}</a>
                )
            }
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            {chosenArea && (
        <div className="chosenArea">
          {chosenArea.map((meal) => {
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
    )
}



export default AreaSearch