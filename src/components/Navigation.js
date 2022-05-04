import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/">Random Meal</Link>
      </Container>
    </Navbar>
  )
}

export default Navigation;