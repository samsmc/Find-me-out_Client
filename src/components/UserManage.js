import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class UserManage extends Component {
  constructor() {
    super();
    state = {
      isAdmin: false,
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    this.setState({ isAdmin: this.props.isAdmin });
  }

  deleteUser() {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/user/delete/${this.props.user._id}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.refresh();
      });
  }

  render() {
    return (
      <div>
        <button className="btn-user" onClick={this.deleteUser}>
          Delete my account
        </button>
      </div>
    );
  }
}
UserManage.defaultProps = {
  refresh: () => null,
  isAdmin: false,
};

export default withAuth(UserManage);
