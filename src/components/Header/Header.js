import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" >
            <Navbar.Brand><NavLink className="link-style" to="/home">Laptop Gallery</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><NavLink className="text-light" to="/home">Home</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light" to="/adminProfile">Admin</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="text-light" to="/deals">Deals</NavLink></Nav.Link>
                    {
                        !loggedInUser.isSignedIn ? <Link to="/login"><button className="btn btn-warning">Login</button></Link> : <p style={{ color: 'cyan', marginTop: '8px', fontWeight: 'bold' }}>{loggedInUser.name}</p>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;