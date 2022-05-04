import React, {useEffect, useState} from 'react'
import axios from 'axios'

//create a grid of links for all the categories.


function AreaSearch() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => {
          setCategories(res.data.categories);
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