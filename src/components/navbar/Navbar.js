import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ItemListContainer from '../ItemListContainer/ItemListContainer.js'
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import IconCart from '../CartWidget/CartWidget.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
function NavBar({ logo }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className="container__logo">
        <Link to="/">
        <img src={logo} width="250px" />
        </Link>
    
          <div className="iconCartMobile">
            <IconCart></IconCart>

          </div>

        </Navbar.Brand>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="color-textnav" href="#action1"><Link className="color-textnav"  to="/">Inicio</Link></Nav.Link>
            <Nav.Link className="color-textnav" href="#action2"><Link className="color-textnav"  to="/">Todo IoT</Link></Nav.Link>
            <NavDropdown title="Accesorios para el Hogar" id="navbarScrollingDropdown" className="color-textnav" >
              <NavDropdown.Item href="#action3">  <Link className="" to="/category/:categoryid">Categoría 1</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action4"><Link className=""  to="/category/:categoryid">Categoría 2</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5"><Link to="/">Lo más Vendido</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="color-textnav" href="#" disabled>
              Pronto...
            </Nav.Link>
          </Nav>
          <div className="iconCartDesktop">
            <IconCart ></IconCart>
          </div>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
