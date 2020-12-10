import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import service from "../api/service";

//salvar os dados na BD
//imprimir os valores existentes dentro do input
//check buttons and input links
//create a function to upload the CV

class UserDetails extends Component {
  state = {
    photo: "",
    name: "",
    position: "",
    technologies: "",
    uploadCV: "",
    channels: {
      linkedin: false,
      github: false,
      stack: false,
      medium: false,
      reddit: false,
      codePen: false,
    },
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChannelCheck = (event) => {
    const { name, checked } = event.target;
    this.setState({ channels: { name: !checked } });
    console.log(name, checked);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/user/update-user/${this.props.user._id}`,
        this.state,
        { withCredentials: true }
      )
      .then((response) => {
        this.props.history.push(`/user/${this.props.user._id}`);
      });
  };

  handleFileUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("photo", e.target.files[0]);
    try {
      const res = await service.handleUpload(uploadData);

      this.setState({ photo: res.secure_url });
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${this.props.user._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({
          name: res.data.name,
          photo: res.data.photo,
          position: res.data.position,
          technologies: res.data.technologies,
          uploadCV: res.data.uploadCV,
        });
      });
  }

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
            seen!
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
                  <img
                    width={150}
                    height={150}
                    alt="avatar_img"
                    src={this.state.photo}
                    className="circle-img"
                    style={{
                      backgroundImage:
                        "url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'",
                    }}
                  />
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
                      //placeholder={this.state.userToCreate && this.state.usertoCreate.name}
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
                      type="checkbox"
                      name="linkedin"
                      checked={this.state.channels.linkedin}
                      onChange={this.handleChannelCheck}
                      id="optionLinkedin"
                    />
                    <label className="form-check-label">Linkedin</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="linkedinUrl"
                      value={this.state.linkedinUrl}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="Github Profile Link"
                      className="form-check-input"
                      type="checkbox"
                      name="github"
                      checked={this.state.channels.github}
                      onChange={this.handleChannelCheck}
                      id="optionGithub"
                    />
                    <label className="form-check-label">Github</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="githubUrl"
                      value={this.state.githubUrl}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="Stack Overflow Profile Link"
                      className="form-check-input"
                      type="checkbox"
                      name="stack"
                      checked={this.state.channels.stack}
                      onChange={this.handleChannelCheck}
                      id="optionStack"
                    />
                    <label className="form-check-label">Stack Overflow</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="stackUrl"
                      value={this.state.stackUrl}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="Medium Profile Link"
                      className="form-check-input"
                      type="checkbox"
                      name="medium"
                      checked={this.state.channels.medium}
                      onChange={this.handleChannelCheck}
                      id="optionMedium"
                    />
                    <label className="form-check-label">Medium</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="mediumUrl"
                      value={this.state.mediumUrl}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="Reddit Profile Link"
                      className="form-check-input"
                      type="checkbox"
                      name="reddit"
                      checked={this.state.channels.reddit}
                      onChange={this.handleChannelCheck}
                      id="optionReddit"
                    />
                    <label className="form-check-label">Reddit</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="redditUrl"
                      value={this.state.redditUrl}
                      onChange={this.handleInput}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      placeholder="CodePen Profile Link"
                      className="form-check-input"
                      type="checkbox"
                      name="codePen"
                      checked={this.state.channels.codePen}
                      onChange={this.handleChannelCheck}
                      id="optionCodePen"
                    />
                    <label className="form-check-label">CodePen</label>
                  </div>

                  <div className="row right">
                    <input
                      type="text"
                      name="codePenUrl"
                      value={this.state.codePenUrl}
                      onChange={this.handleInput}
                    />
                  </div>
                </li>

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
