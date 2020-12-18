import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormControl, Form, Button } from "react-bootstrap";
import axios from "axios";


export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  // findApro/${searchValue}

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(`/findApro/${this.state.searchValue}`);
  };


  render() {
    // console.log('ALLUSERS PROPS', this.props.allUsers);
    return (
      <div>
      <FormControl
        type=“text”
        value={this.state.searchValue}
        onChange={this.handleChange}
        placeholder=“Search”
        className=“mr-sm-2”
      />
  </div>
  
    )
  }
}    