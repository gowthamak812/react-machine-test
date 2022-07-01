import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header from './header';
import Dropdown from './dropdown';
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import '../Sass/card.scss'
import { AiOutlineHeart } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Cards() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getList()
  }, [])

  const getList = () => {
    axios.get("https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=50")

      .then(function (response) {
        console.log(response);
        setUsers(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  AOS.init({
    duration: 1200,
  })
  const [switchToggled, setSwitchToggled] = useState("heart");
  const [fvtId, setFvtId] = useState();
  const ToggleSwitch = (data) => {
    users && users.length > 0 && users.forEach((value) => {
      if (data === value.id) {
        setSwitchToggled("heart-toggle");
        setFvtId(data)
      }
      return data
    })
  }

  return (
    <>
      <Container>
        <Header />
        <Dropdown />
        <div className='card-style'>
          <Row className='card-row'>
            {users && users.slice(0, 12).map((data, i) => {
              return (
                <Col className='p-0' data-aos="slide-up" xs={12} md={6} sm={6} lg={4} key={i}>
                  <AiOutlineHeart onClick={() => ToggleSwitch(data.id)} size={40} className={fvtId == data.id && switchToggled == "heart-toggle" ? switchToggled : "heart"} />
                  <Link style={{ textDecoration: 'none' }} to={`/details?id=${i}`}>
                    {/* <AiOutlineHeart href='#' onClick={ToggleSwitch} size={40} className={switchToggled ? "heart-toggle" : "heart"} /> */}
                    <Card className='card-div '>
                      <Image fluid className='card-image' src={data && data.Images[0].url} />
                      <Card.Body className='card-body'>
                        <p>{data && data.Title}</p>
                        <p>{data && data.Bedrooms} bedroom {data && data.Building_Type} for {data && data.Property_Type}</p>
                        <p class="font-weight-bold">{data && data.Price} &euro; </p>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </Row>
        </div>
        <Footer />
      </Container>
    </>
  );
}
