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

  fetchUsers() {
    axios.get(`${process.env.REACT_APP_API_URL}/user`).then((response) => {
      const name = this.props.match.params.name;
      const userState = this.state.searchValue

      if (name) {
       this.setState({ users: response.data.filter((user) => {
        return user.name.toLowerCase().indexOf(name) > -1
        }) 
      })
      } else {
        this.setState({ users: response.data });
      }
    });
  }

  render() {
    // console.log('ALLUSERS PROPS', this.props.allUsers);
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl
            type="text"
            value={this.state.searchValue}
            onChange={this.handleChange}
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </div>
    );
  }
}
