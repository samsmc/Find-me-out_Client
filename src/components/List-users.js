import React, { Component } from "react";
import axios from "axios";
import UserManage from "./UserManage";
import { withAuth } from "../lib/AuthProvider";

class ListUsers extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };

    this.refresh = this.refresh.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }


  fetchUsers() {
    axios.get(`${process.env.REACT_APP_API_URL}/user`).then((response) => {
      /* const name = this.props.match.params.name;
      const userState = this.state.users */

     
       this.setState({ users: response.data.filter((user) => {
        return user.name.toLowerCase().indexOf(name) > -1
        }) 
      
      } else {
        this.setState({ users: response.data });
      } */
    });
  }

  refresh() {
    this.fetchUsers();
  }

 
  render() {
    return (
      <div className="container-page">
       <UserManage refresh={this.refresh} ListUser={this.state.users}/>
      </div>
    );
  }
}

export default withAuth(ListUsers);
