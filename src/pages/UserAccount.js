import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import axios from 'axios'

class UserAccount extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {}
    }

  }
  getId() {
    axios.get(`${process.env.REACT_APP_API_URL}/user/userCreated/${this.props.user._id}`, { withCredentials: true })
      .then(res =>
        this.setState({ userInfo: res.data })
      )
      .catch(error => {
        console.log(error)
      })




  }
  componentDidMount() {
    this.getId()
  }
  render() {
    const { user } = this.props


    return (
      <div id="privateBack">
        <div style={{ marginLeft: "40px" }}>
          <div className="main-dashboard-elements">
            <br></br>

            <h3>Hello <b>{this.state.userInfo.username}</b>,</h3>


            <div className="top" style={{ textAlign: 'left', marginRight: '50px' }}>
              <img width={150} height={150} alt="avatar_img" src={this.state.userInfo.userPhoto} className="circle-img" style={{ width: 150, height: 150, borderRadius: 200, backgroundImage: "url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'", backgroundSize: "cover" }} />
              <h4 className="info" style={{ marginLeft: 20 }}>{this.state.userInfo.email}</h4>
            </div>



            <h3>Here you can personalize your profile and check all the information about the events you have joined and created.</h3><br></br>
          </div>


          <div>
            <Link to="/user/userCreatedEvent">
              <h3>Created events</h3> </Link>
            <p>Create, edit and remove your events.</p><br></br>
          </div>

          <div>
            <Link to="/user/userJoinedEvent">
              <h3>Joined events</h3></Link>
            <p>Create, edit and remove your events.</p><br></br>
          </div>

          <div>
            <Link to="/user/userDetail">
              <h3>Edit profile</h3></Link>
            <p>Update your details.</p><br></br>
          </div>

          <div>
            <Link to="/add-event">
              <h3>Create a new event </h3>
            </Link>
            <p>Ready to organize a new adventure?</p>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(UserAccount);