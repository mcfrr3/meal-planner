import React from 'react'
import Card from 'react-bootstrap/Card'

function MealChoice (props) {
    const{chosenMeal} = props
    console.log(chosenMeal)
    return(
        <div>
            <h1>Hello</h1>
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
export default MealChoice