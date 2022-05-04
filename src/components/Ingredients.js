import React, {useState, useEffect} from "react"
import axios from "axios"

function Ingredients() {
    const [ingredients, setIngredients] = useState('')

    useEffect(()=> {
        axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <div>
                <h1>Ingredients</h1>
                <p>Choose an ingredient from the list bellow to see all the available meals with that ingredient</p>
            </div>
            <div>
                <a>ingredient placeholder</a>
            </div>
        </div>
    )
}

export default Ingredients