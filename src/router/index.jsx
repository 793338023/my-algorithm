import React, { Component } from "react";
import {
  RouteComponentProps,
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../views/home";

function AppRouter(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
      </Switch>
    </Router>
  );
}

AppRouter.propTypes = {};

export default AppRouter;
