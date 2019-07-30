import React from 'react';
import Form from 'react-bootstrap/Form';

const style = {
  maxWidth: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10ox"
}

export default function LoginForm() {
  return (
    <Form>
      <Form.Group style={style}>
        <Form.Control type="text" placeholder="username"/>
      </Form.Group>

      <Form.Group>
        <Form.Control style={style} type="password" placeholder="Password"/>
      </Form.Group>
    </Form>
  );
}