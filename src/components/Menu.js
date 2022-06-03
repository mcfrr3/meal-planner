import React from 'react'
import Offcanvas from 'react-bootstrap/offcanvas';


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
          Launch
        </button>
    
        <Offcanvas show = {show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Register<br />
            Sign in<br />
            Random Meal<br />
            Category Search< br />
            Area Search<br />
            Sign out
          </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

export default Menu