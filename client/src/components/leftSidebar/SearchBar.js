import React from 'react';
import Form from 'react-bootstrap/Form';

export default class SearchBar extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Search" />
        </Form.Group>
      </Form>
    );
  }
}