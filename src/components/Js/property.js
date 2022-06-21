import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header from './header';
import Dropdown from './dropdown';
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import '../Sass/card.scss'
import { AiOutlineHeart } from 'react-icons/ai';

export default function Cards() {
  const [users, setUsers] = useState([])

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
  return (
    <>
      <Header />
      <Dropdown />
      <div className='card-style'>
        <Row className='card-row'>
          {users && users.slice(0, 12).map((data, i) => {
            return (
              <Col xs={12} md={6} lg={4} key={i} className="m-0">
                <Link style={{ textDecoration: 'none' }} to={`/details?id=${i}`}>
                  <Card className='card-div'>
                    <AiOutlineHeart size={35} className='heart' />
                    <Card.Img className='card-image' src={data && data.Images[3].url} />
                    <Card.Body className='card-body'>
                      <p>{data && data.Title}</p>
                      <p>{data && data.Bedrooms} bedroom apartment for {data && data.Property_Type}</p>
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
    </>
  );
}
