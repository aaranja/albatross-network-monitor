import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class NormalLayout extends React.Component {
	render() {
		return (
			<div className="site-layout-background" style={{ height: "100vh"}}>
			
				{this.props.children}
			</div>
		);
	}
}

export default withRouter(connect()(NormalLayout));
