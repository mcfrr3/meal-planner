import React, {useState, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    name: "",
    source: ""
}

function Sources() {
    const [meal, setMeal] = useState(initialState)
    const [source, setSource] = useState("")

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => {
            setMeal(res.data.meals[0])
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return(
        <div>
            <div>
                <h1>Sources</h1>
                <p>Here you will find sources for all the meals found on this App. clicking on a source will take you to all the different meals of that source.</p>
            </div>
            <div>
                <a href={`${meal.strSource}`}>{meal.strSource}</a>
            </div>

        </div>
    )
}

export default Sources