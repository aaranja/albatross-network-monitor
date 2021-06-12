import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Diagnostico extends Component {
	render() {
		return (
			<div className="site-layout-background" style = {{ height: "100vh" }}>
				<h1>diagnostico</h1>
			</div>
		);
	}
}

export default withRouter(connect()(Diagnostico));