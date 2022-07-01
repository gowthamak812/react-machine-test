import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dropdown() {
    return (
        <>
            <p className='normal-style'>Property for sale</p>
            <Nav fill className='dropdown' variant="tabs">
                <Nav.Item xs-d-block>
                    <select title="All Bedrooms" id="basic-nav-dropdown">
                        <option href="#">1 Bedroom</option>
                        <option href="#">2 Bedrooms</option>
                        <option href="#">3 Bedrooms</option>
                        <option href="#">4 Bedrooms</option>

                    </select>
                </Nav.Item>
                <Nav.Item>
                    <select title="Any Neighbourhood" id="basic-nav-dropdown">
                        <option href="#">Larvatto</option>
                        <option href="#">Condamine</option>
                        <option href="#">Fontvieille</option>
                        <option href="#">Monaco Ville</option>

                    </select>
                </Nav.Item>
                <Nav.Item>
                    <select title="Min Price" id="basic-nav-dropdown">
                        <option href="#">5000000 &#8364;</option>
                        <option href="#">1000000 &#8364;</option>
                    </select>
                </Nav.Item>
                <Nav.Item>
                    <select xs={12} sm={12} md={12} title="Max Price" id="basic-nav-dropdown">
                        <option href="#">2500000 &#8364;</option>
                        <option href="#">2000000 &#8364;</option>
                    </select>
                </Nav.Item>
                <Nav.Item>
                    <select xs={12} sm={12} md={12} title="Sort by" id="basic-nav-dropdown">
                        <option href="#">For Rental</option>
                        <option href="#">For Sale</option>
                    </select>
                </Nav.Item>
                <Nav.Item>
                    <td>12 Results</td>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default Dropdown;
