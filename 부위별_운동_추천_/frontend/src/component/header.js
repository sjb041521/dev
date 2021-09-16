import React, { Component, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,NavDropdown,Nav,Container} from "react-bootstrap";
class Header extends Component { 
    render() { 
    return ( 
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className="text_font" href="/">유튜브 운동 추천</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text_font" href="/">Home</Nav.Link>
            <NavDropdown className="text_font" title="운동 종류" id="collasible-nav-dropdown">
              <NavDropdown.Item className="text_font" href="/arm">팔</NavDropdown.Item>
              <NavDropdown.Item className="text_font" href="/leg">다리</NavDropdown.Item>
              <NavDropdown.Item className="text_font" href="/lat">등</NavDropdown.Item>
              {/* 줄긋기 */}
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item className="text_font" href="/chest">가슴</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.youtube.com/" alt="유튜브"><i size="10px" className="fab fa-youtube"></i></Nav.Link>
            <Nav.Link eventKey={2} href="https://www.instagram.com/" alt="인스타그램">
            <i className="fab fa-instagram-square"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
     );
    }
    }
     export default Header;

