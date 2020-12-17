import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormControl, Form, Button } from "react-bootstrap";
import history from '../history'

export default class Searchbar extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
        searchValue: '',
      }
    }

    // findApro/${searchValue}

    handleChange = (event) => {
      this.setState({searchValue: event.target.value})

    }

    handleSubmit = (event) => {
      event.preventDefault()
      history.push(`/findApro/${this.state.searchValue}`);
    }

      render() {
        // console.log('ALLUSERS PROPS', this.props.allUsers);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search" className="mr-sm-2" />
          <Button type="submit" variant="outline-primary">Search</Button>
        </form>
      </div>
    );
  }
}
