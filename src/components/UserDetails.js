import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import service from "../api/service";

class UserDetails extends Component {
  constructor() {
    super();

    this.state = {
      userToCreate: {
        photo: "",
        name: "",
        position: "",
        technologies: "",
        uploadCV: "",
        channels: "",
      },
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState ({ userToCreate:{ [name]: value }
    });
  }

  handleChannelCheck = (event) => {
    const value = event.target.checked;
    this.setState({ hasChannels: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/user/update-user/${this.props.user._id}`,
        this.state.userToCreate,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.history.push("/user/PublicProfile");
      });
  };

  handleFileUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("photo", e.target.files[0]);
    try {
      const res = await service.handleUpload(uploadData);

      this.setState({photo:res.secure_url});
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="left-container">
          <img
            alt="img"
            src="https://res.cloudinary.com/mscsam/image/upload/v1607527019/userDetails_l2wncr.jpg"
            className="fas fa-paw"
            style={{ maxWidth: 700 }}
          />
        </div>

        <div className="right-container">
          <h1>
            Ensure you fill this form with all the information you want to be
            seen!{" "}
          </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="box-form-fields js-forms">
              <ul>
                <li>
                  <div className="row left">
                    <label className="asterisk-required">
                      <strong>Profile picture</strong>
                    </label>
                  </div>
                </li>
                <div className="row right">
                  <input
                    type="file"
                    name="photo"
                    value={""}
                    onChange={this.handleFileUpload}
                  />
                </div>
                <li>
                  <div className="row left">
                    <label className="asterisk-required">
                      <strong>Name</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <input
                      className="text-input js-validate_characters"
                      data-msg="form.characters_remaining"
                      data-max={30}
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div className="row left">
                    <label
                      htmlFor="standard_submission_submission_designBy"
                      className="asterisk-required"
                    >
                      <strong>Position</strong>
                    </label>
                  </div>
                  <div className="row right">
                    <input
                      id="standard_submission_submission_sitename"
                      className="text-input js-validate_characters"
                      data-msg="form.characters_remaining"
                      data-max={30}
                      type="text"
                      name="position"
                      value={this.state.position}
                      onChange={this.handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div className="row left">
                    <label
                      htmlFor="standard_submission_submission_designerUrl"
                      className="asterisk-required"
                    >
                      <strong>Technologies</strong>
                    </label>
                  </div>

                  <div className="row right">
                    <textarea
                      id="standard_submission_submission_sitename"
                      className="text-input js-validate_characters"
                      data-msg="form.characters_remaining"
                      data-max={185}
                      type="text"
                      name="technologies"
                      value={this.state.technologies}
                      onChange={this.handleInput}
                    />
                  </div>
                </li>

                <li>
                  <div className="row left">
                    <label className="asterisk-required">
                      <strong>Channels</strong>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="Linkedin Profile Link"
                      className="form-check-input"
                      type="radio"
                      name="Linkedin"
                      id="optionLinkedin"
                    />
                    <label className="form-check-label">Linkedin</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="channels"
                      value={this.state.channels}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="Github Profile Link"
                      className="form-check-input"
                      type="radio"
                      name="Github"
                      id="optionGithub"
                    />
                    <label className="form-check-label">Github</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="channels"
                      value={this.state.channels}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="Stack Overflow Profile Link"
                      className="form-check-input"
                      type="radio"
                      name="Stack"
                      id="optionStack"
                    />
                    <label className="form-check-label">Stack Overflow</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="channels"
                      value={this.state.channels}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="Medium Profile Link"
                      className="form-check-input"
                      type="radio"
                      name="Medium"
                      id="optionMedium"
                    />
                    <label className="form-check-label">Medium</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="channels"
                      value={this.state.channels}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="Reddit Profile Link"
                      className="form-check-input"
                      type="radio"
                      name="Reddit"
                      id="optionReddit"
                    />
                    <label className="form-check-label">Reddit</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="channels"
                      value={this.state.channels}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="CodePen Profile Link"
                      className="form-check-input"
                      type="radio"
                      name="CodePen"
                      id="optionCodePen"
                    />
                    <label className="form-check-label">CodePen</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="channels"
                      value={this.state.channels}
                      onChange={this.handleInput}
                    />
                  </div>
                </li>

                {/* //create a function to upload the CV */}
                <li>
                  <div className="row left">
                    <label className="asterisk-required">
                      <strong>Upload CV</strong>
                    </label>
                  </div>
                </li>
                <div className="row right">
                  <input
                    type="file"
                    name="uploadCV"
                    value={""}
                    onChange={this.handleFileUpload}
                  />
                </div>
              </ul>
            </div>

            <button className="button" type="submit">
              UPDATE PROFILE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(UserDetails);
