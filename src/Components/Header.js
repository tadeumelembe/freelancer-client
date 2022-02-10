import React from 'react'
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export const Header= ({theme, toggleTheme}) => {
    return (
        <div>
            <Navbar className='header' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className="text-black" href="#home">Phandar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  style={{color:'#000'}} href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing"  style={{color:'#000'}}>Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"  style={{color:'#000'}}>Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"  style={{color:'#000'}}>Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"  style={{color:'#000'}}>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"  style={{color:'#000'}}>Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link  style={{color:'#000'}} href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2}  style={{color:'#000'}} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                        <Nav>
                           <button onClick={toggleTheme}>Dark</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

