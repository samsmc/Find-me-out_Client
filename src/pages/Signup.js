import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from '../lib/AuthProvider';

class Signup extends Component {
  state = { name: "", email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    //console.log('Signup -> form submit', { name, password });
    this.props.signup({ name, email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Full Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />

          <label>Email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />


          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Signup" />
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
