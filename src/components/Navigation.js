import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class Navigation extends Component {
  state = {
    users: [],
  };

  fetchUsers = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/user`);
      this.setState({ users: response.data });
    } catch (err) {
      console.error(err);
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand>
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
                <NavDropdown.Item>
                  <Link to={"/details"}>Edit Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={`/pro/${this.props.user._id}`}>Public Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <button className="btn-nav" onClick={logout}>
                    Logout
                  </button>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to={"/private"}>
                  <img
                    alt="user-icon"
                    src="https://res.cloudinary.com/mscsam/image/upload/v1607444982/icons8-test-account-50_i0v3ow.png"
                  />
                </Link>
              </Nav.Link>
            </>
          ) : (
            <div className="group-btn">
              <Link to="/login">
                <p className="btn-nav">Login</p>
              </Link>

              <Link to="/signup">
                <p className="btn-nav">Sign Up</p>
              </Link>
            </div>
          )}
        </Nav>
        <Link to={"/findApro"}>
          <Nav.Link href="#link">Find a professional</Nav.Link>
        </Link>
      </Navbar>
    );
  }
}

export default withAuth(Navigation);
