import React, {useEffect} from 'react'
import Card from 'react-bootstrap/Card'

import {useParams} from 'react-router-dom'

function MealChoice (props) {
    const{chosenMeal, mealChoice} = props
    console.log(chosenMeal)

    let {id} = useParams()

    useEffect(() => {
        mealChoice(id)
    }, [])

    return(
        <div>
          <div>
        {chosenMeal && (
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
export default MealChoice