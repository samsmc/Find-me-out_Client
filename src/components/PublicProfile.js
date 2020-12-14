import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

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
        this.setState({
          user: res.data,
        });
        console.log("userSTATEDATA", res.data);
      });
  };

  componentDidMount() {
    this.getUserData();
  }

  render() {
    const { user } = this.state;
    //console.log("USER-Render", {user});

    return (
      <div>
        <section class="sign-in">
          <div class="container-page">
            <br></br>
            <h2 className="form-title" style={{ textAlign: "center" }}>
              {user.name}
            </h2>

            <div class="signin-content">
              <div className="public-profileImg">
                <img id="profilePhoto" src={user.photo} alt="profile img" />
              </div>

              <div className="icon-column">
                <div className="form-group">
                  <a href={user.uploadCV}>
                    <img
                      alt="cv icon"
                      src="https://res.cloudinary.com/mscsam/image/upload/v1607965243/cv_tiajef.png"
                      width="60"
                      height="60"
                    />
                  </a>
                </div>
                <div className="form-group">
                  {user.linkedin && (
                    <a href={user.linkedin}>
                      <img
                        alt="linkedin icon"
                        src="https://res.cloudinary.com/mscsam/image/upload/v1607964569/linkedin_1_onlwzs.png"
                        className="icon"
                      />
                    </a>
                  )}
                </div>
                <div className="form-group">
                  {user.github && (
                    <a href={user.github}>
                      <img
                        alt="github icon"
                        src="https://res.cloudinary.com/mscsam/image/upload/v1607964569/github_b4hlmu.png"
                        className="icon"
                      />
                    </a>
                  )}
                </div>
                <div className="form-group">
                  {user.stack && (
                    <a href={user.stack}>
                      <img
                        alt="stack icon"
                        src="https://res.cloudinary.com/mscsam/image/upload/v1607964569/stack-overflow_wjnd5o.png"
                        className="icon"
                      />
                    </a>
                  )}
                </div>
                <div className="form-group">
                  {user.medium && (
                    <a href={user.medium}>
                      <img
                        alt="medium icon"
                        src="https://res.cloudinary.com/mscsam/image/upload/v1607964568/medium_bgjn7s.png"
                        className="icon"
                      />
                    </a>
                  )}
                </div>
                <div className="form-group">
                  {user.reddit && (
                    <a href={user.reddit}>
                      <img
                        alt="medium icon"
                        src="https://res.cloudinary.com/mscsam/image/upload/v1607964570/reddit_yob9m2.png"
                        className="icon"
                      />
                    </a>
                  )}
                </div>
                <div className="form-group">
                  {user.codePen && (
                    <a href={user.codePen}>
                      <img
                        alt="codePen"
                        src="https://res.cloudinary.com/mscsam/image/upload/v1607964569/codepen_znqvpf.png"
                        className="icon"
                      />
                    </a>
                  )}
                </div>
              </div>
              <div className="profile-column">
                <div className="form-group">
                  <h4><b>{user.position}</b>
                  </h4>
                </div>
                <div className="form-group" style={{maxWidth:105, margin: "auto", marginTop:45}}>
                  <h5>{user.technologies}
                  </h5>
                </div>
                <div className="profile-btn">
                  <Link to={"./userDetail"}>
                  <button
                    className="btn-user">back</button>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withAuth(PublicProfile);
