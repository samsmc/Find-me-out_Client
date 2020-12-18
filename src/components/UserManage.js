import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

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
      <div>
      {this.props.ListUser ? this.props.ListUser.map((e) => {
          return (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={e.photo} />
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>{e.technologies}</Card.Text>
                  <Link to={`/pro/${e._id}`}>
                    <Button variant="primary">check it</Button>
                  </Link>
                </Card.Body>
              </Card>
            </>
          );
        }) : <h3>Users are Loading</h3>}
    
      </div>
    );
  }
}
UserManage.defaultProps = {
  refresh: () => null,
  isAdmin: false,
};

export default withAuth(UserManage);
