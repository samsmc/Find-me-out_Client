import React, { useState } from "react";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";
import service from "../api/service";

const UserDetails = (props) => {
  const [imgUrl, setImgUrl] = useState();
  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [position, setPosition] = useState();
  const [technologies, setTechnologies] = useState();
  const [channels, setChannels] = useState();
  const [uploadCV, setUploadCV] = useState();

  const submitChanges = async (event) => {
    event.preventDefault();
    /* const formData = new FormData() */
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/update-user/${props.user._id}`,
      { imgUrl, name, email, position, technologies, uploadCV, channels }
    );
    // return response
    props.history.push("/private");
    /*  const json = await response.json() */
    /* alert(JSON.stringify(response)) */
  };

  const handleFileUpload = async (e) => {
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    try {
      const res = await service.handleUpload(uploadData);

      // after the console.log we can see that response carries 'secure_url' which we can use to update the state
      setImgUrl(res.secure_url);
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

  return (
    <section id="content">
      <div className="content-view">
        <h1 className="heading-large horizontal-center">Your details</h1>

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
                  name="img"
                  value={""}
                  onChange={handleFileUpload}
                />
              </div>
              <li>
                <div className="row left">
                  <label className="asterisk-required">
                    <strong>name</strong>
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
                  <label className="asterisk-required">
                    <strong>Email</strong>
                  </label>
                </div>
                <div className="row right">
                  <input
                    type="text"
                    name="email"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="box-form-fields js-forms">
            <ul>
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
                  <input
                    id="standard_submission_submission_sitename"
                    className="text-input js-validate_characters"
                    data-msg="form.characters_remaining"
                    data-max={30}
                    type="number"
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

          <button className="button large width-full" type="submit">
            UPDATE PROFILE
          </button>
        </form>
      </div>
    </section>
  );
};

export default withAuth(UserDetails);
