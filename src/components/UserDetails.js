import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import service from "../api/service";
import fileupload from "../api/fileupload";

class UserDetails extends Component {
  state = {
    photo: "",
    name: "",
    position: "",
    technologies: "",
    uploadCV: "",
    linkedin: "",
    github: "",
    stack: "",
    medium: "",
    reddit: "",
    codePen: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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

  handleCvUpload = async (e) => {
    const uploadDataCv = new FormData();

    uploadDataCv.append("uploadCV", e.target.files[0]);
    try {
      const res = await fileupload.handleUploadCv(uploadDataCv);

      this.setState({ uploadCV: res.secure_url });
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
          linkedin: res.data.linkedin,
          github: res.data.github,
          stack: res.data.stack,
          medium: res.data.medium,
          reddit: res.data.reddit,
          codePen: res.data.codePen,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3 className="form-title">
            Ensure you fill this form with all the information you want to be
            seen!
          </h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div>
                <h6>Profile picture</h6>
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

              <div className="form-group">
                <input
                  type="file"
                  name="photo"
                  value={""}
                  onChange={this.handleFileUpload}
                />
              </div>

              <div className="form-group">
                <h6>Name</h6>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInput}
                />
              </div>

              <div className="form-group">
                <h6>Position</h6>
                <input
                  data-msg="form.characters_remaining"
                  data-max={30}
                  type="text"
                  name="position"
                  value={this.state.position}
                  onChange={this.handleInput}
                />
              </div>

              <div className="form-group">
                <h6> Technologies</h6>
                <input
                  data-msg="form.characters_remaining"
                  data-max={185}
                  type="text"
                  name="technologies"
                  value={this.state.technologies}
                  onChange={this.handleInput}
                />
              </div>

              <h6 className="form-group">
                <b>Channels:</b>
              </h6>

              <div className="form-group">
                <h6>Linkedin</h6>
                <input
                  className="form-control"
                  placeholder="URL profile"
                  type="text"
                  name="linkedin"
                  value={this.state.linkedin}
                  onChange={this.handleInput}
                />
              </div>

              <div className="form-group">
                <h6>Github</h6>
                <input
                  className="form-control"
                  placeholder="URL profile"
                  type="text"
                  name="github"
                  value={this.state.github}
                  onChange={this.handleInput}
                />
              </div>

              <div className="form-group">
                <h6>Stack Overflow</h6>
                <input
                  className="form-control"
                  placeholder="URL profile"
                  type="text"
                  name="stack"
                  value={this.state.stack}
                  onChange={this.handleInput}
                />
              </div>

              <div className="form-group">
                <h6>Medium</h6>
                <input
                  className="form-control"
                  placeholder="URL profile"
                  type="text"
                  name="medium"
                  value={this.state.medium}
                  onChange={this.handleInput}
                />
              </div>

              <div className="form-group">
                <h6>Reddit</h6>
                <input
                  className="form-control"
                  placeholder="URL profile"
                  type="text"
                  name="reddit"
                  value={this.state.reddit}
                  onChange={this.handleInput}
                />
              </div>

              <div className="form-group">
                <h6>CodePen</h6>
                <input
                  className="form-control"
                  placeholder="URL profile"
                  type="text"
                  name="codePen"
                  value={this.state.codePen}
                  onChange={this.handleInput}
                />
              </div>

              <br></br>

              <div className="form-group">
                <input
                  type="file"
                  name="uploadCV"
                  value={""}
                  onChange={this.handleCvUpload}
                />
              </div>

            </div>
            <button className="btn-user" type="submit">
              UPDATE PROFILE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(UserDetails);
