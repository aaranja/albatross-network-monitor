import React, { Component } from "react";
import { Layout, Menu,Avatar,Typography,Button,Card} from "antd";
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	SettingOutlined,
	EditOutlined,
	EllipsisOutlined
} from "@ant-design/icons";
import Login  from "../../pages/Login";
import Monitoreo from "../../pages/Monitoreo";
import Diagnostico from "../../pages/Diagnostico";
import Bitacora from "../../pages/Bitacora";

const { Title } = Typography;
const { Sider } = Layout;

const {Meta} = Card
const SiderbarH = (props) => {

	const {data,stateH} = props;

	return(
		
		<Sider
			trigger={null}
			collapsible
			collapsed={stateH.collapsed}
			style={{ height: "100vh" }}
		>
		{/*	<Card title="ITE" 
			extra={
				
			<a href="/login"  style = {{color:"white"}}>Login</a>}
			bordered={false} style={{ width: 200,height:100,background:"rgb(18, 70, 115)", color:"white" }}>
				<Avatar size={42} icon={<UserOutlined />}
					src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
				/>
    		</Card>
			
			<Card
    style={{ width: 200 }}
    cover={
      <img
        alt="example"
        src="https://images.app.goo.gl/KUF6cD1UQyU9h6Ku7"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>*/}
			<Menu
				theme = "dark"
				mode="inline"
				defaultSelectedKeys={[1]}
			>
			{
				data.map((route, i)=>{
					return(
						<Menu.Item key={route.key} icon={route.icon}
						href={route.path}
						>
							{route.title}
						</Menu.Item>);
				})
		    }
			</Menu>
		</Sider>
	);
}
export default SiderbarH;