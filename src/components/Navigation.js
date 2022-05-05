import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/">Random Meal</Link>
        <Link to = 'categories'> Category Search</Link>
        <Link to = '/areas'>Area Search</Link>
      </Container>
    </Navbar>
  )
}

export default Navigation;