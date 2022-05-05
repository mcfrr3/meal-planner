import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'

//create a grid of links for all the areas.
const idArray = Array.from(Array(27).keys())
// console.log (idArray)

function AreaSearch() {
    const [areas, setAreas] = useState([])
    const [chosenArea, setChosenArea] = useState([])

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

    const mealChoice =(meal) => {

    }
    
    return(
        <div>
            <h1>Area Search</h1>
            <div className='searchList'>
            {
                areas.map((area, index) => 
                    <a 
                    onClick = {() => areaSearch(area.strArea)}
                    key = {area[index]}
                    className = 'individualLink' 
                    href ='#areaList' >{area.strArea}</a>
                )
            }
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
        </div>
    )
}



export default AreaSearch