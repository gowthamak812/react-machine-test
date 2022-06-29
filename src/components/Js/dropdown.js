import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dropdown() {
    return (
        <>
            <p className='normal-style'>Property for sale</p>

            <Navbar expand="lg dropdown">
                <Nav className="me-auto nav-alignment">
                    <NavDropdown title="All Bedrooms" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">1 Bedroom</NavDropdown.Item>
                        <NavDropdown.Item href="#">2 Bedrooms</NavDropdown.Item>
                        <NavDropdown.Item href="#">3 Bedrooms</NavDropdown.Item>
                        <NavDropdown.Item href="#">4 Bedrooms</NavDropdown.Item>

                    </NavDropdown>
                    <NavDropdown title="Any Neighbourhood" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Larvatto</NavDropdown.Item>
                        <NavDropdown.Item href="#">Condamine</NavDropdown.Item>
                        <NavDropdown.Item href="#">Fontvieille</NavDropdown.Item>
                        <NavDropdown.Item href="#">Monaco Ville</NavDropdown.Item>

                    </NavDropdown>
                    <NavDropdown title="Min Price" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">5000000 &#8364;</NavDropdown.Item>
                        <NavDropdown.Item href="#">1000000 &#8364;</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Max Price" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">2500000 &#8364;</NavDropdown.Item>
                        <NavDropdown.Item href="#">2000000 &#8364;</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Sort by" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">For Rental</NavDropdown.Item>
                        <NavDropdown.Item href="#">For Sale</NavDropdown.Item>
                    </NavDropdown>
                    <div href="#"   className='result'>
                        <td>12 Results</td>
                    </div>
                </Nav>

            </Navbar>
        </>
    );
}

export default Dropdown;
