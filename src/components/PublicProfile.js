import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";

class PublicProfile extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
    };
  }

  getUserData = () => {
    console.log("this.props.user", this.props.user);
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${this.props.user._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({ user: res.data });
        console.log("userSTATEDATA", res.data);
      });
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
    const { user } = this.state;
    console.log("user", user);

    return (
      <div>
        <div id="singleback">
          <div>
            <img alt="user-profile" src={user.photo} />
          </div>
          <div className="">
            <ul>
            <li>Nome: <b>{user.name}</b></li>

              <li>
                Position: <b>{user.position}</b>
              </li>

              <li>
                technologies: <b>{user.technologies}</b>
              </li>

              <li>
                Channels: <b></b>
              </li>
              <li>
                uploadCV: <b>{user.uploadCV}</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(PublicProfile);
