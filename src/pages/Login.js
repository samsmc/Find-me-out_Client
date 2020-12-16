import React, { Component } from "react";
import "./login-signup.css";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    //console.log('Login -> form submit', { email, password });
    this.props.login({ email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img src="https://res.cloudinary.com/mscsam/image/upload/v1607708503/signin-image_eotjjw.jpg" alt="sing up" />
                </figure>
                <Link to={"/signup"}>
                  <div className="signup-image-link">Create an account</div>
                </Link>
              </div>
              <div className="signin-form">
                <h2 className="form-title">Login</h2>

                <form
                  className="register-form"
                  id="login-form"
                  onSubmit={this.handleFormSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="your_email">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      id="your_name"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="your_pass">
                      <i className="zmdi zmdi-lock" />
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      id="your_pass"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withAuth(Login);
