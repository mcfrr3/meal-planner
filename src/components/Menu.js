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
            <Link to='/api/auth/register' className='nav-link' onClick={handleClose}>Register</Link>
            <Link to='api/auth/login' className='nav-link' onClick={handleClose}>Login</Link>
            <Link to='/'  className='nav-link' onClick={handleClose}>Random Meal</Link>
            <Link to= '/categories' className='nav-link' onClick={handleClose}>Category Search</Link>
            <Link to= '/areas' className='nav-link' onClick={handleClose}>Area Search</Link>
            <Link to = '/api/favoriteRecipes' className='nav-link' onClick={handleClose}>Favorites</Link>
            <Link to = '/api/auth/logout' className='nav-link' onClick={handleClose}>Logout</Link>
          </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

export default Menu