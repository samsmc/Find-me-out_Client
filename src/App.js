import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserAccount from "./pages/UserAccount";
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import UserDetailsForm from "./components/UserDetailsForm";
import PublicProfile from "./components/PublicProfile";

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <AnonRoute exact path="/signup" component={Signup} />
        <AnonRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/user/userDetail" component={UserDetailsForm} />
        <PrivateRoute exact path="/private" component={UserAccount} />
        <Route exact path="/user/:id" component={PublicProfile} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
