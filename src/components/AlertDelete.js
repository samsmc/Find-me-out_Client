import { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";


class AlertDelete extends Component {
  deleteUser() {
    const userId = this.props.user._id;
    axios
      .delete(`${process.env.REACT_APP_API_URL}/user/delete/${userId}`, {
        withCredentials: true,
      })
      .then((res) => {
        this.props.logout();
      });
  }

  render() {
    return (
      <div>
        <button
          className="btn-delete"
          onClick={() => {
            if (window.confirm("Are you sure to delete your account?")) {
              this.deleteUser(this.props.user._id);
            }
          }}
        >
          Delete my account
        </button>
      </div>
    );
  }
}

export default withAuth(AlertDelete);
