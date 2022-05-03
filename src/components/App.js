import logo from '../logo.svg';
import '../App.css';

import SearchBar from './Search';
import RandomMeal from './RandomMeal';

function App() {
  return (
    <div className="App">
      <RandomMeal />
      <SearchBar/>
    </div>
  );
}

export default App;
