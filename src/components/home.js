import React from 'react' 
import {Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
import Logo from "./images/logo.png"

export default function (props) {
    return (
    <div className=''>
         <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><img src={Logo} style={{width: '500px'}}></img></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Schedule</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
    </div>
    )
}