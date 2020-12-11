import React, { Component } from "react";
import "./login-signup.css";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = { name: "", email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    //console.log('Signup -> form submit', { name, password });
    this.props.signup({ name, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>

              <form className="register-form" id="register-form" onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
                    id="pass"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    
                    id="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="https://res.cloudinary.com/mscsam/image/upload/v1607708503/signup-image_c2jq4x.jpg" alt="sing up" />
              </figure>
              <Link to={"/login"}> 
                <div class="signup-image-link">I have an account</div>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default withAuth(Signup);
