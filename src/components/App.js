import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './Search';
import RandomMeal from './RandomMeal';
import Sources from './SourcePage';
import Ingredients from './Ingredients'

function App() {
  return (
    <div className="App">
      <RandomMeal />
      <SearchBar />
      <Sources />
      <Ingredients />
    </div>
  );
}

export default App;
