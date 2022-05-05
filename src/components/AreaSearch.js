import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
    
    return(
        <div>
            <h1>Area Search</h1>
            <div className='searchList'>
            {
                areas.map(area => 
                    <a 
                    key = {idArray.forEach(item => `${Date.now()+item}`)}
                    className = 'individualLink' 
                    href ='' >{area.strArea}</a>
                )
            }
            </div>
        </div>
    )
}



export default AreaSearch