import React, { Component } from "react";
import { FormControl, Form, Button } from "react-bootstrap";

export default class Searchbar extends Component {

    state = {
        users: [],
      }

      /* FindUser = () => {
        const names = {this.props.name}
        const nameFilter = names.filter(names => word.length > 6);
        return()
      } */
      
      render() {
        console.log(this.props.allUsers)
    return (
      <div>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
          {/* <FindUser /> */}
        </Form>
      </div>
    );
  }
}
