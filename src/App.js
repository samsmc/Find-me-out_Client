import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

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
import Footer from "./components/Footer";


function App() {
  return (
    <AuthProvider>
      <Navigation />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <AnonRoute exact path="/signup" component={Signup} />
        <AnonRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/details" component={UserDetailsForm} />
        <PrivateRoute exact path="/private" component={UserAccount} />
        <Route exact path="/pro/:id" component={PublicProfile} />
        <Route exact path="/findApro" component={ListUsers} />
      </Switch>
      <Footer />
    </AuthProvider>
  );
}

export default App;
