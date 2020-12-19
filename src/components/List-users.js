import React, { Component } from "react";
import axios from "axios";
import UserManage from "./UserManage";
import { withAuth } from "../lib/AuthProvider";
import Searchbar from "./Search";

class ListUsers extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      filteredUsers: [],
    };

    this.refresh = this.refresh.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/user`);
      this.setState({
        users: response.data,
        filteredUsers: response.data
      });
    } catch (err) {
      console.error(err);
    }
  };

  refresh() {
    this.fetchUsers();
  }

  filterUpdate(value){
    this.setState({
      filteredUsers: value
    })
  }


  render() {
console.log('allUsers state from parent component', this.state.allUsers)

    return (
      <>
        <div className="container-page">
          <Searchbar filterdUsers={this.state.filteredUsers} users={this.state.users} filterUpdate={this.filterUpdate.bind(this)}/> {/* {this.state.users && this.state.users} */}
          <UserManage refresh={this.refresh} listUser={this.state.filteredUsers} allUsers={this.state.allUsers}/>
        </div>
      </>
    );
  }
}

export default withAuth(ListUsers);
