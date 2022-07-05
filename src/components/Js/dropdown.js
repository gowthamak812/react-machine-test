import React from 'react';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dropdown() {
    return (
        <>
            <p className='normal-style'>Property for sale</p>
            <Nav fill className='dropdown' variant="tabs" border-none>
                <Nav.Item>
                    <select className='select' title="All Bedrooms" id="basic-nav-dropdown">
                        <option href="#">Property Type</option>
                        <option href="#">1 Bedroom</option>
                        <option href="#">2 Bedrooms</option>
                        <option href="#">3 Bedrooms</option>
                        <option href="#">4 Bedrooms</option>
                    </select>
                </Nav.Item>
                <Nav.Item>
                    <select className='select' title="Any Neighbourhood" id="basic-nav-dropdown">
                        <option href="#">Any Neighbourhood</option>
                        <option href="#">Larvatto</option>
                        <option href="#">Condamine</option>
                        <option href="#">Fontvieille</option>
                        <option href="#">Monaco Ville</option>

                    </select>
                </Nav.Item>
                <Nav.Item>
                    <select className='select' title="Min Price" id="basic-nav-dropdown">
                        <option href="#" value="a">Min Price</option>
                        <option href="#">1000000 &#8364;</option>
                        <option href="#">1500000 &#8364;</option>
                        <option href="#">2000000 &#8364;</option>
                        <option href="#">3000000 &#8364;</option>
                    </select>
                </Nav.Item>
                <Nav.Item>
                    <select className='select' xs={12} sm={12} md={12} title="Max Price" id="basic-nav-dropdown">
                        <option href="#">Max Price</option>
                        <option href="#">1500000 &#8364;</option>
                        <option href="#">2000000 &#8364;</option>
                        <option href="#">3000000 &#8364;</option>
                    </select>
                </Nav.Item>
                <Nav.Item>
                    <select className='select' xs={12} sm={12} md={12} title="Sort by" id="basic-nav-dropdown">
                        <option href="#">Sort by</option>
                        <option href="#">For Sale</option>
                        <option href="#">For Rental</option>
                    </select>
                </Nav.Item>
                <Nav.Item>
                    <td className='result'>12 Results</td>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default Dropdown;
