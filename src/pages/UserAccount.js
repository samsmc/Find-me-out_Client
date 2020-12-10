import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";

class UserAccount extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
    };
  }
  getId() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/user/userCreated/${this.props.user._id}`,
        { withCredentials: true }
      )
      .then((res) => this.setState({ userInfo: res.data }))
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getId();
  }
  render() {
    const { user } = this.props;

    return (
      <div className="container">
        <br></br>

        <h3>
          Hello <b>{this.state.userInfo.name}</b>,
        </h3>

        <div className="top">
          <img
            width={150}
            height={150}
            alt="avatar_img"
            src={this.state.userInfo.photo}
            className="circle-img"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'",
            }}
          />
          <h4 className="info">{this.state.userInfo.email}</h4>
        </div>

        <h3>
          Here you can personalize your profile and check all the information
          you want to display on your public profile.
        </h3>
        <br></br>

        <div>
          <Link to="/user/userDetail">
            <h3>Edit profile</h3>
          </Link>
          <p>Update your details.</p>
          <br></br>
          <Link to={`/user/${this.props.user._id}`}>
            <div>
              <strong type="button">View Public Profile</strong>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(UserAccount);
