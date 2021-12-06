import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import {useDispatch} from "react-redux"
function RouteLinks(props) {
  const { userType  } = useSelector((state) => state.login);
  
  return userType == 1 ? (
      
    <Redirect to="/services" />
  ) : (
    <Route path={props.path} component={props.component} strict={props.strict} exact={props.exact} />
  );
}

export default RouteLinks;
