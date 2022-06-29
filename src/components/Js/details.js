import React, { useEffect, useState } from 'react';
import { Col, Row, Button, Table, OverlayTrigger, Tooltip, Container, Modal, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import '../Sass/details.scss'
import Header from './header';
import Footer from "./footer";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { BsHeart, BsShareFill } from 'react-icons/bs';
import { MdZoomOutMap } from 'react-icons/md';
import { TbBuildingArch } from 'react-icons/tb';
import { AiFillHome } from 'react-icons/ai';

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
  const Share = (props) => (
    <Tooltip {...props}>
      Share
    </Tooltip>
  );
  const Like = (props) => (
    <Tooltip {...props}>
      Like
    </Tooltip>
  );
  const Zoom = (props) => (
    <Tooltip {...props}>
      Zoom
    </Tooltip>
  );
  const Plan = (props) => (
    <Tooltip {...props}>
      Floor Plan
    </Tooltip>
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // let longText = value && value.Description;
  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere";
  let one = value.Floor_Plans && value.Floor_Plans[0].url;
  console.log(one);

  return (
    <Container>
      <Header />
      {value && (
        <Row>
          <Col className='m-0 p-0 first-col' lg={7} md={7} xs={12} sm={12}>
            <div className='icon-position'>
              <h3>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={Zoom}>
                  <MdZoomOutMap size={25} />
                </OverlayTrigger>

              </h3>
              <span className='capture'>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={Plan}>
                  <TbBuildingArch size={25} />
                </OverlayTrigger>
              </span>
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
          <Col lg={5} md={5} xs={12} sm={12}>
            <Row className='right-row'>
              <div>
                <div className='right-col'>
                  <span>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={Like}>
                      <BsHeart size={25} />
                    </OverlayTrigger>
                  </span>
                  <span>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={Share}>
                      <BsShareFill size={22} />
                    </OverlayTrigger>
                  </span>
                  <br />
                  <hr />
                  <tr>
                    <p> &euro; {value && value.Price}
                      <sub>
                        <td>{value && value.Bedrooms} bed</td>
                        <td>{value && value.Floor_Area} sqm</td>
                      </sub>
                    </p>
                  </tr>
                  <p>{value && value.Bedrooms} bedroom apartment for sale in {value.Area && value.Area.Name}</p>
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
                      <td>Neighbourhood:</td>
                      <td><a href='#'><p>{value.Area && value.Area.Name}</p></a></td>
                    </tr>
                    <tr>
                      <td>Price per Sqm:</td>
                      <td style={{ textDecoration: "none" }}><p> &euro; {value && value.Price_Per_Sqm}</p></td>
                    </tr>
                    <tr>
                      <td>Brochure:</td>
                      <td><a target='_blank'
                        href={value.Brochure && value.Brochure[0].url}>
                        <p>Download Brochure</p></a></td>
                    </tr>
                    <tr>
                      <td>Floor plan:</td>
                      <td onClick={handleShow}>
                          <a href='#'><p>View Floorplan</p></a></td>
                      <Modal className='model-box' show={show} onHide={handleClose}>
                        <Image src={value.Floor_Plans && value.Floor_Plans[0].url} />
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </tr>
                  </Table>
                  {/* <div className='text' dangerouslySetInnerHTML={{ __html: htmlString }} /> */}
                  <div>
                    <ReactReadMoreReadLess
                      charLimit={200}
                      readMoreText={"Read more ▼"}
                      readLessText={"Read less ▲"}
                      readMoreClassName="read-more-less--more"
                      readLessClassName="read-more-less--less"
                    >

                      {longText}
                    </ReactReadMoreReadLess>
                  </div>
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
                          <td className='mail' href={value.Negotiator && value.Negotiator.Email}>Email</td>
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
        </Row >
      )
      }
      <Footer />
    </Container>
  );
}