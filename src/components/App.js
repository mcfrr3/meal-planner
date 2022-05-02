import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import RandomMeal from './RandomMeal';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <RandomMeal />
      </div>
    </div>
  );
}

export default App;
