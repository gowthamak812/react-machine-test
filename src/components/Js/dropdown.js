import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dropdown() {
    return (
        <>
            <p className='normal-style'>Property for sale</p>

            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto nav-alignment">
                        <NavDropdown title="All Bedrooms" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Select</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Any Neighbourhood" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Select</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Min Price" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Select</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Max Price" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Select</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sort by" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Select</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" id="basic-nav-dropdown" className='result'>12 Results</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Dropdown;
