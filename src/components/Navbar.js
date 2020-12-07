import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from 'axios'
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

class TheNavbar extends Component {

  constructor() {
    super()

    this.state = {
      userInfo: {}
    }
  }

  getId() {
    axios.get(`${process.env.REACT_APP_API_URL}/user/userCreated/${this.props.user._id}`, { withCredentials: true })
      .then(res =>
        this.setState({ userInfo: res.data })
      )
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    return (
      this.props.user ? this.getId() : null
    )
  }

  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="">
        <Navbar expand="lg" bg="light" className="justify-content-between">
          <Navbar.Brand>
            <Link to={"/"}>
              <img
                alt="Logo"
                src="./images/LogoFMO.png"
                width="85"
                height="80"
                className="d-inline-block align-top"
              />{" "}
              
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

              {isLoggedin ? (
                <>
                  <p className="navbar-user">username:{user.username}</p>

                  <NavDropdown title="USER" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Edit Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      <button className="navbar-button" onClick={logout}>
                        Logout
                      </button>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <img src="./images/icons8-test-account-50.png" />
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
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withAuth(TheNavbar);
