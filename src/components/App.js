import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation';
import SearchBar from './Search';
import RandomMeal from './RandomMeal';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navigation />
        <RandomMeal />
        <SearchBar/>
      </div>
    </div>
  );
}

export default App;
