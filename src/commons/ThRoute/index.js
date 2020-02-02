import React from "react";
import { Route } from "react-router-dom";

const ThRoute = ({component: Component, options}) => (
    <Route {...options} component={Component}/>
);

export default ThRoute;