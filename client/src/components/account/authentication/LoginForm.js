import React from 'react';
import Form from 'react-bootstrap/Form';

const style = {
  maxWidth: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10ox"
}

export default function LoginForm( { switchFormType, setUsername, setPassword } ) {
  return (
    <Form>
      <Form.Group style={style}>
        <Form.Control type="text" placeholder="Username" onChange={setUsername}/>
      </Form.Group>

      <Form.Group>
        <Form.Control style={style} type="password" placeholder="Password"/>
      </Form.Group>

      <Form.Group style={style}>
        <a href="#" onClick={switchFormType}> No account? Register instead -> </a>
      </Form.Group>
    </Form>
  );
}