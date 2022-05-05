import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card'

const initialForm = {
  name: "",
  category: "",
  area: "",
  searchType: "",
};
let id = 0;
const getId = () => ++id;

function SearchBar() {
  const [form, setForm] = useState(initialForm);
  const [list, setList] = useState([]);


  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
//   console.log(form);

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.searchType === "name") {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${form.name}`
        )
        .then((res) => {
          setList(res.data.meals);
          console.log(res);
        })
        .catch((err) => {
          console.log({ err });
        });
    } else if (form.searchType === "category") {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => {
          setList(res.data.categories);
        })
        .catch((err) => {
          console.log({ err });
        });
    } else {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then((res) => {
          setList(res.data.meals);
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  };
//   console.log(list);

  const categorySearch =(strCategory) => {
      axios 
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strCategory}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log({err})
        })
  }

  return (
    <div className="search-component">
      <form onSubmit={onSubmit}>
        <label>
          SEARCH TYPE
          <select
            name="searchType"
            type="search-type"
            onChange={onChange}
            value={form.searchType}
          >
            <option value=""> -Select- </option>
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="area">Area</option>
          </select>
        </label>
        <div>
          {form.searchType === "name" && (
            <label>
              <input
                name="name"
                type="text"
                placeholder="search by name"
                onChange={onChange}
                value={form.name}
              />
            </label>
          )}
        </div>
        <button> SUBMIT </button>
      </form>

      <ul>
        {form.searchType === "name" &&
          list.map((meal) => 
              <a href ='' >{meal.strMeal}</a>
          )}
        {form.searchType === "category" &&
          list.map((cat) => { return (
            <div className = 'search-cards'>
            <Card >
            <Card.Header>
              <Card.Title  key ={cat.idCategory}>
                {cat.strCategory}
              </Card.Title>
              <Card.Subtitle></Card.Subtitle>
            </Card.Header>
            </Card>
            </div>
          )}
          )}
        {form.searchType === "area" &&
          list.map((place) => { return (
            <Card className = 'search-cards' key ={getId}>
            <Card.Header>
              <Card.Title>
                {place.strArea}
              </Card.Title>
              <Card.Subtitle></Card.Subtitle>
            </Card.Header>
            </Card>
          )}
          )}
      </ul>
    </div>
  );
}

export default SearchBar;
