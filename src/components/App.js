import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './Search';
import RandomMeal from './RandomMeal';

function App() {

  return (
    <div className="App">
      <div className='container'>
        <RandomMeal />
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
