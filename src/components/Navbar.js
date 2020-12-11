import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

class TheNavbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <Link to={"/"}>
              <img
                alt="Logo"
                src="https://res.cloudinary.com/mscsam/image/upload/v1607444982/LogoFMO_bprcp6.png"
                width="80"
                height="80"
              />
            </Link>
          </Navbar.Brand>

          <Nav className="mr-auto">
            {isLoggedin ? (
              <>
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Edit Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    <button className="navbar-button" onClick={logout}>
                      Logout
                    </button>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>
                <Link to={"/private"}>
                  <img
                    alt="user-icon"
                    src="https://res.cloudinary.com/mscsam/image/upload/v1607444982/icons8-test-account-50_i0v3ow.png"
                  /></Link>
                </Nav.Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="navbar-button">Login</button>
                </Link>
                <br />
                <Link to="/signup">
                  <button className="navbar-button">Sign Up</button>
                </Link>
              </>
            )}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default withAuth(TheNavbar);
