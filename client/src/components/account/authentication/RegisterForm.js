import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const style = {
  maxWidth: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10ox"
}

export default function RegisterForm( {switchFormType} ) {
  return (
    <Form>
      <Form.Group style={style}>
        <Form.Control type="email" placeholder="email"/>
      </Form.Group>

      <Form.Group style={style}>
        <Form.Control type="text" placeholder="username"/>
      </Form.Group>

      <Form.Group>
        <Form.Control style={style} type="password" placeholder="Password"/>
      </Form.Group>

      <Form.Group>
        <Form.Control style={style} type="password" placeholder="Confirm Password"/>
      </Form.Group>

      <Form.Group style={style}>
        <a href="#" onClick={switchFormType}> Already have an account? Login instead -> </a>
      </Form.Group>
    </Form>
  );
}