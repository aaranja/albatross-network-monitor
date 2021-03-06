import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class Siderbar extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout style={{ padding: 0 }}>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
					style={{ height: "100vh" }}
				>
					<div
						className="logo"
						style={{
							height: "32px",
							margin: "16px",
							backgroundColor: "gray",
						}}
					/>
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={["1"]}
					>
						<Menu.Item key="1" icon={<UserOutlined />}>
							Nombre de usuario
						</Menu.Item>
						<Menu.Item key="2" icon={<VideoCameraOutlined />}>
							nav 2
						</Menu.Item>
						<Menu.Item key="3" icon={<UploadOutlined />}>
							nav 3
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Header
						className="site-layout-background"
						style={{ padding: 0 }}
					>
						{React.createElement(
							this.state.collapsed
								? MenuUnfoldOutlined
								: MenuFoldOutlined,
							{
								className: "trigger",
								onClick: this.toggle,
							}
						)}
					</Header>
					<Content
						className="site-layout-background"
						style={{
							margin: "24px 16px",
							padding: 0,
							minHeight: 280,
						}}
					>
						Content
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default Siderbar;
