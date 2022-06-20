import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Dropdowns() {
    return (
        <Form.Group className='dropdown'>
        <Form.Control as="select">
          <option >Active</option>
          <option>Inactive</option>
        </Form.Control>
      </Form.Group>
    )
}

export default function Dropdown() {
    return (
        <ListGroup horizontal>
            <Dropdowns />
            <Dropdowns />
            <Dropdowns />
            <Dropdowns />
        </ListGroup>
    )
}
