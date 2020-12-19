import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";



class UserManage extends Component {


  render() {
    const listUser = this.props.listUser;

    return (
      <div className="grid">
        {listUser ? (
          listUser.map((e) => {
            return (
              <Card className="box" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={e.photo}
                  alt="img"
                  style={{
                    width: 417,
                    height: 298,
                    backgroundImage:
                      "url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')",
                    backgroundSize: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">{e.technologies}</p>
                  <Link to={`/pro/${e._id}`}>
                    <button href="#" className="btn btn-primary">
                      check it
                    </button>
                  </Link>
                </div>
              </Card>
            );
          })
        ) : (
          <h3>Users are Loading</h3>
        )}
      </div>
    );
  }
}


export default withAuth(UserManage);
