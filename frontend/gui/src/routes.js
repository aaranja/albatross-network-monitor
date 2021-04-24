import React from "react";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

const BaseRouter = () => (
	<div>
		<Route exact path="/login/" component={Login} />
		<Route exact path="/home/" component={Home} />
	</div>
);

export default BaseRouter;
