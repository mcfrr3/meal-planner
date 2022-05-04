import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

<<<<<<< HEAD
// import SearchBar from './Search';
=======
import SearchBar from './Search';
>>>>>>> 85f2bde811e8978110fdc3249c215e2f32761eb4
import RandomMeal from './RandomMeal';
import Sources from './SourcePage'

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <RandomMeal />
      {/* <SearchBar /> */}
      <Sources />
=======
      <div className='container'>
        <RandomMeal />
        <SearchBar/>
      </div>
>>>>>>> 85f2bde811e8978110fdc3249c215e2f32761eb4
    </div>
  );
}

export default App;
