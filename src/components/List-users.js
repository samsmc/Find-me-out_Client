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
      this.setState({ users: response.data });
    });
  }

  refresh() {
    this.fetchUsers();
  }

  renderUser(userData) {
    return <UserManage refresh={this.refresh} portfolioUserData={userData} />;
  }

  render() {
    return (
      <div className="container-page">
        {this.state.users.map((event) => this.renderUser(event))}
      </div>
    );
  }
}

export default withAuth(ListUsers);
