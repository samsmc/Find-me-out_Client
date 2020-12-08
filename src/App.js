import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UserAccount from "./pages/UserAccount";
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <AuthProvider>
      <Navbar />

      <Switch>
        <Home exact path="/" component={Home} />
        <AnonRoute exact path="/signup" component={Signup} />
        <AnonRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/user/userDetail" component={UserDetails} />
        <PrivateRoute exact path="/private" component={UserAccount} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
