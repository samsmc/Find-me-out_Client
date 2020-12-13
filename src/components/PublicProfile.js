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
                <ul>
                  <li>
                    Nome: <b>{user.name}</b>
                  </li>

                  <li>
                    Position: <b>{user.position}</b>
                  </li>

                  <li>
                    technologies: <b>{user.technologies}</b>
                  </li>
                  <h6>Channels</h6>
                  <li>
                    Linkedin:
                    {/* <img src="../images/linkedin.png" /> */}
                    <b>{user.linkedin}</b>
                  </li>

                  <li>
                    Github: <b>{user.github}</b>
                  </li>
                  <li>
                    Stack Overflow: <b>{user.stack}</b>
                  </li>
                  <li>
                    Medium: <b>{user.medium}</b>
                  </li>
                  <li>
                    Reddit: <b>{user.reddit}</b>
                  </li>
                  <li>
                    CodePen: <b>{user.codePen}</b>
                    {/* <img src="../images/codepen.png" /> */}
                  </li>
                  <li>
                    uploadCV: <b>{user.uploadCV}</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withAuth(PublicProfile);
