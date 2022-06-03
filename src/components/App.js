import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import { mapResponseToMeal } from '../helpers';

import Navigation from './Navigation';
import SearchBar from './Search';
import RandomMeal from './RandomMeal';
import Sources from './SourcePage';
import Ingredients from './Ingredients'
import CategorySearch from './CategorySearch'
import AreaSearch from './AreaSearch'
import MealChoice from './MealChoice';
import {initialMealChoice} from '../helpers/initialMealChoice'
import Menu from './Menu'


//need to reset title and chosenMeal when moving from one category to another

function App() {
  const [chosenMeal, setChosenMeal] = useState([initialMealChoice])
  const [title, setTitle] = useState('')
  const [show, setShow] = useState(false)



  const mealChoice = (mealId) => {
    <Navigate to = {`/meals/${mealId}`}/>
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((res) => {
      setChosenMeal(mapResponseToMeal(res.data.meals[0]));
      })
      .catch((err) => {
        console.log({ err });
      });
  };

 

  return (
          <BrowserRouter>
      <div className="App">
        <Container>
          {/* {'start'} */}
          <Menu />
        <Navigation setChosenMeal = {setChosenMeal} chosenMeal={chosenMeal} show = {show} setShow= {setShow}/>
          <Routes>
            <Route path='/' element={<RandomMeal />} />
            <Route path='/categories' element={<CategorySearch  
            chosenMeal = {chosenMeal}
            mealChoice = {mealChoice}
            setChosenMeal = {setChosenMeal}
            title = {title}
            setTitle = {setTitle}
            />}/>
            <Route path='/areas' element={<AreaSearch 
            chosenMeal = {chosenMeal}
            mealChoice = {mealChoice}
            setChosenMeal ={setChosenMeal}
            title = {title}
            setTitle = {setTitle}
            />} />
            <Route path='/meals' element={<RandomMeal />} />
            <Route path = {`/meals/:id`} element = {<MealChoice 
            chosenMeal = {chosenMeal}
            mealChoice = {mealChoice}
            /> }/>
            {/* <SearchBar /> */}
            {/* <Sources /> */}
            {/* <Ingredients /> */}
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
