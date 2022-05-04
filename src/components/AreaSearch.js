import React, {useEffect, useState} from 'react'
import axios from 'axios'

//create a grid of links for all the areas.


function AreaSearch() {
    const [areas, setAreas] = useState([])

    useEffect(() => {
        axios
        .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then((res) => {
          setAreas(res.data.meals);
        })
        .catch((err) => {
          console.log({ err });
    }, [])
})
    
    return(
        <div>

        </div>
    )
}



export default AreaSearch