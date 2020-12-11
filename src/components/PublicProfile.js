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
        this.setState({
          user: res.data,
          //linkedin: { url: res.data.linkedin.url, check: res.data.check },
          // github: { url: res.data.github.url, check: res.data.github },
          //stack: { url: res.data.stack.url, check: res.data.stack },
          //medium: { url: res.data.medium.url, check: res.data.medium},
          //reddit: { url: res.data.reddit.url, check: res.data.reddit},
          //codePen: { url: res.data.codePen.url, check: res.data.codePen},
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
      <section className="signup">
        <div className="container-page">
          <div className="signup-content">
            <div className="signup-form">
              <div>
                <img alt="user-profile" src={user.photo} />
              </div>
              <div className="">
                {/* <ul>
                  <li>
                    Nome: <b>{user.name}</b>
                  </li>

                  <li>
                    Position: <b>{user.position}</b>
                  </li>

                  <li>
                    technologies: <b>{user.technologies}</b>
                  </li>

                  <li>
                    Linkedin: <b>{user.linkedin}</b>
                  </li>
                  <li>
                    Github: <b>{user.github.url}</b>
                  </li>
                  <li>
                    Stack Overflow: <b>{user.stack.url}</b>
                  </li>
                  <li>
                    Medium: <b>{user.medium.url}</b>
                  </li>
                  <li>
                    Reddit: <b>{user.reddit.url}</b>
                  </li>
                  <li>
                    CodePen: <b>{user.codePen.url}</b>
                  </li>
                  <li>
                    uploadCV: <b>{user.uploadCV}</b>
                  </li>
                </ul> */}
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
        </div>
      </section>
    );
  }
}

export default withAuth(PublicProfile);
