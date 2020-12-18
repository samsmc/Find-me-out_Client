import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormControl, Form, Button } from "react-bootstrap";
import axios from "axios";

let Searchbar = (props) => {
  let [searchValue, setSearchValue] = useState("");
  let [usersFilter, setUsersFilter] = useState([]);

  let RenderUsersFiltered = () => {
    let search = searchValue.toLowerCase();
    let users = [...props.allUsers];
    let filteredUser = users.filter((data) => {
      let usersNameLower = data.name.toLowerCase();
      return usersNameLower === search;
    });
    setUsersFilter(filteredUser);
  };

  useEffect(() => {
    RenderUsersFiltered();
  }, [searchValue]);
  return (
    <>
      <FormControl
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        className="mr-sm-2"
      />
      {usersFilter[0] ? (
        <div className="container-filter-users-searchbar">
          {usersFilter &&
            usersFilter.map((data) => {
              return (
                <>
                  <h1>{data.name}</h1>
                  <h2>{data.email}</h2>
                  <a href={`/pro/${data._id}`}>Go to profile</a>
                </>
              );
            })}
        </div>
      ) : null}
    </>
  );
};

export default Searchbar;
