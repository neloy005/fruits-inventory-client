import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const handleSignOut = () => {
    signOut(auth);
}

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Navbar id='navbar' bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to='/home'>🍉<span className='website-name'>Fruits</span>🍋</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            {
                                user &&
                                <>
                                    <Nav.Link as={Link} to='/manageinventory'>Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to='/addfruit'>Add Item</Nav.Link>
                                    <Nav.Link as={Link} to='/myitem'>My Item</Nav.Link>
                                </>

                            }

                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        </Nav>
                        {
                            user ?
                                <>
                                    <p className='user-name' style={{ 'color': 'black' }}>🟢 {user.displayName}</p>
                                    <Nav.Link onClick={handleSignOut}><Button variant="outline-success">Logout</Button></Nav.Link>
                                </>
                                :
                                <Nav.Link as={Link} to='/login'><Button variant="outline-danger">Login</Button></Nav.Link>
                        }


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;