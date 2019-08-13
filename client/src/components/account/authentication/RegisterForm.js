import React from 'react';
import Form from 'react-bootstrap/Form';

const style = {
  maxWidth: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10ox"
}

const fieldChange = (event, setField) => {
  setField(event.target.value);
}

export default function RegisterForm( {switchFormType, setUsername, setPassword, setEmail} ) {
  return (
    <Form>
      <Form.Group style={style}>
        <Form.Control type="email" placeholder="E-mail" onChange={(event) => fieldChange(event, setEmail)}/>
      </Form.Group>

      <Form.Group style={style}>
        <Form.Control type="text" placeholder="Username" onChange={(event) => fieldChange(event, setUsername)}/>
      </Form.Group>

      <Form.Group>
        <Form.Control style={style} type="password" placeholder="Password" onChange={(event) => fieldChange(event, setPassword)}/>
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