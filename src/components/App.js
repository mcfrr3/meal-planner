import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './Search';
import RandomMeal from './RandomMeal';
import Sources from './SourcePage';
import Ingredients from './Ingredients'
import AreaSearch from './AreaSearch';
import CategorySearch from './CategorySearch'

function App() {

  return (
    <div className="App">
      <RandomMeal />
      <SearchBar />
      <Sources />
      <Ingredients />
      <AreaSearch />
      <CategorySearch />
    </div>
  );
}

export default App;
