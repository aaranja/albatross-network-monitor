import React, { Component } from "react";
import { Layout} from "antd";
import { Route } from "react-router-dom";
import ContentH from "../../components/ContentH";
import HeaderH from "../../components/HeaderH";
import SidebarH from "../../components/SidebarH";
import Login from "../Login";
import {SData} from "../../data";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
	state = {
		collapsed: false,
	};

	stateI = {
		index: 0,
	}
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	login = () => {
		return(
			<Route exact path="/login/" component={Login} />
		);
	}
	render() {
	
		return (
			<Layout style = {{ padding: 0}}>
  					<SidebarH v data={SData} stateH = {this.state}/>
					<Layout className="site-layout">
						<ContentH loginv={this.login} stateH = {this.state}  toggleH = {this.toggle} index = {this.stateI}/>
					</Layout>
			</Layout>
		);
	}
}
export default withRouter(connect()(Home));
