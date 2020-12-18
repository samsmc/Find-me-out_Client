import React, { Component } from "react";
import axios from "axios";
import UserManage from "./UserManage";
import { withAuth } from "../lib/AuthProvider";
import Searchbar from "./Searchbar";

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


  fetchUsers = async ()  => {
    try{
    let response = await axios.get(`${process.env.REACT_APP_API_URL}/user`);
    this.setState({
      users: response.data
    })
    } catch(err) {
      console.error(err);
    }
  
  }

  refresh() {
    this.fetchUsers();
  }

 
  render() {
    return (
      <>
      <Searchbar allUsers={this.state.users && this.state.users}/>
      <div className="container-page">
       <UserManage refresh={this.refresh} ListUser={this.state.users}/>
      </div>
      </>
    );
  }
}

export default withAuth(ListUsers);
