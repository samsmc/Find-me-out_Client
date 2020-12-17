import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserAccount from "./pages/UserAccount";
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import UserDetailsForm from "./components/UserDetailsForm";
import PublicProfile from "./components/PublicProfile";
import ListUsers from "./components/List-users";
import history from './history'

function App() {
  return (
    <AuthProvider>
      <Navigation />

      <Router history={history}>
        <Route exact path="/" component={Home} />
        <AnonRoute exact path="/signup" component={Signup} />
        <AnonRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/user/userDetail" component={UserDetailsForm} />
        <PrivateRoute exact path="/private" component={UserAccount} />
        <Route exact path="/pro/:id" component={PublicProfile} />
        <Route exact path="/findApro/:name" component={ListUsers} />
        <Route exact path="/findApro" component={ListUsers} />
      </Router>
    </AuthProvider>
  );
}

export default App;
