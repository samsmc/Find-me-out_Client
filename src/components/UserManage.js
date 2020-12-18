import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";


class UserManage extends Component {
  constructor() {
    super();
    this.state = {
      isAdmin: false,
    };
  }

  componentDidMount() {
    this.setState({ isAdmin: this.props.isAdmin });
  }

  render() {
    return (
      <div className="card">
        {this.props.ListUser ? (
          this.props.ListUser.map((e) => {
            return (
              <div  style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={e.photo}
                  alt="Card image cap"
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
UserManage.defaultProps = {
  refresh: () => null,
  isAdmin: false,
};

export default withAuth(UserManage);
