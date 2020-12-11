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
    //const { user } = this.props;

    return (
      <div>
        <section className="signup">
          <div className="container-page">
            <div className="signup-content">
              <div className="signup-form">
                <h3>
                  Hello <b>{this.state.userInfo.name}</b>,
                </h3>
                <br></br>
                <div>
                  <img
                    alt="avatar_img"
                    src={this.state.userInfo.photo}
                    id="circle-img"
                    style={{ borderRadius: 200 }}
                  />
                </div>
                <h5>
                  <b>{this.state.userInfo.email}</b>
                </h5>
                <br></br>
                <h6>
                  Here you can personalize your profile and check all the
                  information you want to display on your public profile.
                </h6>
                <div>
                  <Link to="/user/userDetail">
                    <h6 className="btn-user">Edit profile</h6>
                  </Link>
                </div>
                <Link to={`/user/${this.props.user._id}`}>
                  <h6 className="btn-user">View Public Profile</h6>
                </Link>
              </div>
              <div className="signup-image">
                <figure>
                  <img
                    src="https://res.cloudinary.com/mscsam/image/upload/v1607711275/settings_rkqex1.jpg"
                    alt="signup"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withAuth(UserAccount);
