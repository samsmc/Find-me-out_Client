import React, { useState } from "react";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import service from "../api/service";

/* const UserDetails = (props) => { */
  const [photo, setPhoto] = useState();
  const [name, setname] = useState();
  const [position, setPosition] = useState();
  const [technologies, setTechnologies] = useState();
  const [channels, setChannels] = useState();
  const [uploadCV, setUploadCV] = useState();

  const submitChanges = async (event) => {
    event.preventDefault();
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/update-user/${props.user._id}`,
      { photo, name, position, technologies, uploadCV, channels }
    );
    props.history.push("/user/PublicProfile");
  };

  const handleFileUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("photo", e.target.files[0]);

    try {
      const res = await service.handleUpload(uploadData);
      
      setPhoto(res.secure_url);
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

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
        <form onSubmit={submitChanges}>
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
                  onChange={handleFileUpload}
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
                    value={name || ""}
                    onChange={(e) => setname(e.target.value)}
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
                    value={position || ""}
                    onChange={(e) => setPosition(e.target.value)}
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
                    value={technologies || ""}
                    onChange={(e) => setTechnologies(e.target.value)}
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
                    value={channels || ""}
                    onChange={(e) => setChannels(e.target.value)}
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
                    value={channels || ""}
                    onChange={(e) => setChannels(e.target.value)}
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
                    value={channels || ""}
                    onChange={(e) => setChannels(e.target.value)}
                  />
                </div>

                <div className="form-check form-check-inline">
                  <input
                    placeholder="Medium Profile Link"
                    className="form-check-input"
                    type="radio"
                    name="medium"
                    id="optionMedium"
                  />
                  <label className="form-check-label">Medium</label>
                </div>

                <div className="row right">
                  <input
                    type="text"
                    name="channels"
                    value={channels || ""}
                    onChange={(e) => setChannels(e.target.value)}
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
                    value={channels || ""}
                    onChange={(e) => setChannels(e.target.value)}
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
                    value={channels || ""}
                    onChange={(e) => setChannels(e.target.value)}
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
                  onChange={handleFileUpload}
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
};

/* export default withAuth(UserDetails); */
