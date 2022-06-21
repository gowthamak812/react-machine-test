import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import '../Sass/details.scss'
import Header from './header';
import Footer from "./footer";
import { BsHeart, BsShareFill } from 'react-icons/bs';
import { MdZoomOutMap } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import Capture from '../images/Capture.PNG'

export default function Details(props) {
  const [value, setValue] = useState([])
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id")
  useEffect(() => {
    getList()
  }, [])

  const getList = () => {
    axios.get("https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=50")

      .then(function (response) {
        console.log(response);
        const value = response.data;
        value && value.length > 0 && value.map((data, i) => {
          if (id == i) {
            setValue(data)
          }
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <Header />
      {value && (
        <Row>
          <Col className='m-0 p-0 first-col' lg={7} md={7} xs={12} sm={6}>
            <div className='icon-position'>
              <img className='capture' src={Capture} alt='capture'></img>
              <h3><MdZoomOutMap /></h3>
              <img
                className='row-img'
                src={value.Images && value.Images.length > 0 && value.Images[0].url} />
            </div>
            <Row lg={6} md={12} xs={12} sm={6}>
              <Col className='m-0 p-0' lg={6} md={6} xs={12} sm={6}>
                <img className='col-img' src={value.Images && value.Images.length > 0 && value.Images[1].url} />
              </Col>
              <Col className='m-0 p-0' lg={6} md={6} xs={12} sm={6}>
                <img className='col-img' src={value.Images && value.Images.length > 0 && value.Images[2].url} />
              </Col>
            </Row>
          </Col>
          <Col lg={5} md={5} xs={12} sm={6}>
            <Row className='right-row'>
              <div>
                <div className='right-col'>
                  <h3> <BsShareFill size={18} /> <BsHeart size={22} /> </h3>
                  <hr />
                  <tr>
                    <p> &euro; {value && value.Price}
                      <sub>
                        <td>{value && value.Bedrooms} bed</td>
                        <td>{value && value.Floor_Area} sqm</td>
                      </sub>
                    </p>
                  </tr>
                  <p>{value && value.Bedrooms} bedroom apartment for sale in Fontvieille</p>
                  <div className='home-icon'>
                    <a href='#'>
                      <p><AiFillHome className='home' size={20} /></p>
                      <p><u>Please connect us</u></p>
                    </a>
                  </div>
                  <Button variant='dark' className='w-100 text-uppercase' size='lg' active>Contact Agent</Button>
                </div>
                <div className='middle-col'>
                  <p>FACTS &#38; FEATURES</p>
                  <hr />
                  <Table borderless>
                    <tr>
                      <td>Neighbourhood</td>
                      <td><u>Fontvelliya</u></td>
                    </tr>
                    <tr>
                      <td>Price per Sqm</td>
                      <td> &euro; {value && value.Price_Per_Sqm}</td>
                    </tr>
                    <tr>
                      <td>Brochure</td>
                      <td><u>Download Brochure</u></td>
                    </tr>
                    <tr>
                      <td>Floor plan</td>
                      <td><u>View Floorplan</u></td>
                    </tr>
                  </Table>
                  <p className='summary'>Superb duplex apartment in a new development with a spacious bedroom, two sun filled balconies, fully fitted kitchen, living room/dining room, guest toilet and lots of storage space.</p>
                </div>
                <div>
                  <Table borderless>
                    <tr className='personal-info'>
                      <td><img src={value.Negotiator && value.Negotiator.Image && value.Negotiator.Image.url}></img></td>
                      <td>
                        <p>{value.Negotiator && value.Negotiator.Name}</p>
                        <p>Real Estate Broker</p>
                        <tr>
                          <td className='num'>&#43;{value.Negotiator && value.Negotiator.Phone}</td>
                          <td className='mail'>Email</td>
                        </tr>
                      </td>
                    </tr>
                  </Table>
                  <div>
                    <iframe className='map' src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"> </iframe>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      )}
      <Footer />
    </>
  );
}