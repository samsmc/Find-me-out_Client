import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import AlertDelete from "../components/AlertDelete";

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
    return (
      <div>
        <section className="signup">
          <div className="container-page">
            <div className="signup-content">
              <div className="signup-form">
                <h2>
                  Hello <b>{this.state.userInfo.name}</b>,
                </h2>
                <br></br>
                <div>
                  <img
                    alt="avatar_img"
                    src={this.state.userInfo.photo}
                    id="profilePhoto"
                    style={{
                      borderRadius:"50%",
                      backgroundImage:
                        "url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')",
                      backgroundSize: "cover",
                    }}
                  />
                </div>
                <h4>
                  <b>{this.state.userInfo.email}</b>
                </h4>
                <br></br>
                <h4>
                  Here you can personalize your profile and check all the
                  information you want to display on your public profile.
                </h4>
                <div>
                  <Link to="/details">
                    <h6 className="btn-user">Edit profile</h6>
                  </Link>
                </div>
                <div>
                  <Link to={`/pro/${this.props.user._id}`}>
                    <h6 className="btn-user">View Public Profile</h6>
                  </Link>
                </div>
                <AlertDelete />
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
UserAccount.defaultProps = {
  refresh: () => null,
};

export default withAuth(UserAccount);
