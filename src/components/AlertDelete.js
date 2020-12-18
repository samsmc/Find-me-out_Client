import { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";

class AlertDelete extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      deleteState: false,
    };
  }

  deleteUser() {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/user/delete/${this.props.user._id}`,
        { withCredentials: true }
      )
      .then((res) => {
        this.props.logout();
        this.props.history.push("/");
      });
  }

  render() {
    let ChangeState = () => {
     return ( <button className="btn-delete" onClick={this.deleteUser}>
        Delete my account
      </button>)
    };
    const SoAlert = () => {
      this.setState({
        deleteState: true,
      });
    };
    console.log(this.state);
    return (
      <div>
        <button onClick={() => SoAlert()}>I want to delete my account </button>
        {this.state.deleteState ? <ChangeState /> : null}
      </div>
    );
  }
}
AlertDelete.defaultProps = {
  refresh: () => null,
};

export default withAuth(AlertDelete);
