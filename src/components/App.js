import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../App.css';
import logo from '../logo.svg';

import Navigation from './Navigation';
import SearchBar from './Search';
import RandomMeal from './RandomMeal';
import Sources from './SourcePage';
import Ingredients from './Ingredients'
import CategorySearch from './CategorySearch'
import AreaSearch from './AreaSearch'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Container>
        <Navigation />
          <Routes>
            <Route path='/' element={<RandomMeal />} />
            <Route path='/categories' element={<CategorySearch />}/>
            <Route path='/areas' element={<AreaSearch />} />
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
