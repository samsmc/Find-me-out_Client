import React, { Component } from "react";

class Search extends Component {

  filterUpdate() {
    const val = this.myValue.value.toLowerCase();
    let newFilteredUsers = this.props.users.filter(user=>user.name.toLowerCase().includes(val))
    console.log(this.props.users, this.props.newFilteredUsers)
    this.props.filterUpdate(newFilteredUsers);
    console.log(val);
  }

  render() {
    /* console.log("allUsers value", this.props.allUsers); */

    return (
      <div>
        <input
          type="text"
          ref={(value) => {
            this.myValue = value;
          }}
          placeholder="search..."
          onChange={this.filterUpdate.bind(this)}
        />
      </div>
    );
  }
}

export default Search;
