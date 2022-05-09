import React, { Component } from 'react';
import Link from 'next/link'
import {Navbar, 
    Container, 
    Nav, 
    Image,
    NavDropdown, 
    Form, 
    FormControl, 
    Button} from 'react-bootstrap';


export default class Navbar2 extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
render() {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><Image src="/pngable_tomato.png" style={{width:100, marginTop: -7}} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Angry Tomato</Nav.Link>
             
              <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
           
            </Nav>
            <Link href="/admin">
                Admin 
            </Link>
            <Link href="/login">
                Login 
            </Link>
            <Link href="/signup">
                Signup
            </Link>
            <button>
                Logout
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
