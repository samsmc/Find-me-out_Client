import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";


class UserManage extends Component {


  render() {
    const listUser = this.props.listUser;

    return (
      <div>
        {listUser ? (
          listUser.map((e) => {
            return (
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={e.photo}
                  alt="img"
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
              </div>
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
