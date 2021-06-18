import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function navBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Navbar.Brand href="#home">Dessert NOW!
            <CartWidget></CartWidget>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">hace tu pedido</Nav.Link>
                <NavDropdown title="Nuestro catalogo " id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Tortas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Helados</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Postres</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default navBar
