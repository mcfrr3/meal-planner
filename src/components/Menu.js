import React from 'react'
import Offcanvas from 'react-bootstrap/offcanvas';
import {Link} from 'react-router-dom'


const Menu =(props) => {

    const {show, setShow} = props

    const handleClose = () => {
        setShow(false)
      }
      const handleShow = () => {
        setShow(true)
      }

      console.log(show)
    return(
        <>
        <button vairant= 'primary' onClick={handleShow}>
          MENU
        </button>
    
        <Offcanvas show = {show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Link to='/api/auth/register' className='nav-link'>Register</Link>
            <Link to='api/auth/login' className='nav-link'>Login</Link>
            <Link to='/'  className='nav-link'>Random Meal</Link>
            <Link to= '/categories' className='nav-link'>Category Search</Link>
            <Link to= '/areas' className='nav-link'>Area Search</Link>
            <Link to = '/api/auth/logout' className='nav-link'>Logout</Link>
          </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

export default Menu