import React , {useEffect, useState}from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    
    /**
     * const [categorias , setCategorias] = useState([]);

    useEffect(() => { fetch('https://mocki.io/v1/663b0bfd-8f0d-4a1f-9eae-c0f063e472f5')
                       .then(response => response.json())
                       .then(res => setCategorias(res))
    }, []);
     */

    return (
        <Navbar className="menu" collapseOnSelect expand="lg" variant="dark">
            <Link to={`/`}>
            <Navbar.Brand className='brand' style={{fontSize:'250%'}}>Dessert NOW!
            <CartWidget></CartWidget>
            </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">hace tu pedido</Nav.Link>
                <NavDropdown title="Categoria" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                    <NavLink to={"/category/Tortas"} style={{ textDecoration: 'none', color: 'black'}}>
                        Tortas
                        </NavLink>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                    <NavLink to={"/category/Helados"} style={{ textDecoration: 'none', color: 'black'}}>
                        Helados
                        </NavLink>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                    <NavLink to={"/category/Postres"} style={{ textDecoration: 'none', color: 'black'}}>
                        Postres
                        </NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
