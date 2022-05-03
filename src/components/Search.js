import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchByName from './SearchByName'

const initialForm = {
    name: '',
    category: '',
    area: '',
    searchType: '',
}

function SearchBar () {
    const [form, setForm] = useState(initialForm)
    const [categoryList, setCategoryList] = useState([])
    const [selectMealList, setSelectMealList] = useState([])
    const [selectMeal, setSelectMeal] = useState([])

 
    useEffect(() => {
        if(form.searchType==='category'){
            return fetchCategoryList()
        }
    }, [form])

    

    const fetchCategoryList =() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(res => {
                setCategoryList(res.data.categories)
                setSelectMealList([])
            })
            .catch(err => {
                console.log ({err})
            })
    }

    const onChange = (e) => {
        const {name, value} =e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    // console.log(categoryList)

    const onSubmit = e => {
        e.preventDefault()
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${form.name}`)
                .then(res => {
                    setSelectMealList(res.data.meals)
                    setCategoryList([])
                    console.log(res)
                })
                .catch(err => {
                    console.log({err})
                })
        }

    const mealSelection =(id) => {
        setSelectMeal(selectMealList.filter(meal => {
            return id===meal.id
        })
         )
         console.log('working')
    }
    console.log (selectMeal)

    return(
        <div className = 'search-component'>
            <form onSubmit = {onSubmit}>
                <label>SEARCH TYPE
                    <select 
                    name= 'searchType'
                    type= 'search-type'
                    onChange = {onChange}
                    value = {form.searchType}
                    >
                    <option value=''> -Select- </option>
                    <option value='name'>Name</option>
                    <option value= 'category'>Category</option>
                    <option value= 'area'>Area</option>
                    </select>
                </label>
                <div>
                {
                form.searchType==='name' &&
                    // <SearchByName form = {form} onChange = {onChange}/>
                <label>
                    <input 
                    name = 'name'
                    type = 'text'
                    placeholder='search by name'
                    onChange = {onChange}
                    value = {form.name}
                    />
                </label>
                }
                {
                form.searchType==='category' &&
               <> 
               <select 
                    type= 'category'
                    onChange = {onChange}
                    value= {categoryList}
                >
                    
                    {categoryList.map(category => {
                        return(
                        <option 
                        onClick = {mealSelection}
                        key = {category.idCategory}
                        name ={category.strCategory}
                        onChange = {onChange}
                        // value= {categoryList.category}
                        >{category.strCategory}</option>
                        
                        )}
                    )}
                    </select>
                    
                    </>
                }
                </div>
                <button>Search</button>
            </form>
            <ul>
            {selectMealList.map(meal => 
                <li onClick = {mealSelection} key = {meal.idMeal}>{meal.strMeal}</li>)}
            </ul>

        </div>
    )
}

export default SearchBar