import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {initialMealChoice} from '../helpers/initialMealChoice'


const Navigation = (props) => {

  const {setTitle, setChosenMeal} = props
  const onClick = () => {
    setTitle('')
    setChosenMeal(initialMealChoice)
  }
  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/">Random Meal</Link>
        <Link onClick={onClick} to ='/categories'>Categories</Link>
        <Link onClick={onClick} to='/areas'>Areas</Link>
      </Container>
    </Navbar>
  )
}

export default Navigation;