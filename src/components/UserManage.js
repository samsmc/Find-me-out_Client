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
    const { name, technologies, photo } = this.props.portfolioUserData;
    
    
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={photo} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {technologies}
            </Card.Text>
            <Link to={`/pro/${this.props.user._id}`}>
            <Button variant="primary">check it</Button>
             </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
UserManage.defaultProps = {
  refresh: () => null,
  isAdmin: false,
};

export default withAuth(UserManage);
