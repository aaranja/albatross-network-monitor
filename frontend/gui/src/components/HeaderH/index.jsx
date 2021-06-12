import React, { Component } from "react";
import { Layout,Typography,Button,Avatar} from "antd";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
    UserOutlined
} from "@ant-design/icons";
import Login from "./../../pages/Login";
const { Title } = Typography;
const { Header} = Layout;

const HeaderH = (props) => {
    const {toggleH,stateH} = props;
    return(
        <Header
        className="site-layout-background"
        >
             
        {React.createElement(
            stateH.collapsed
                ? MenuUnfoldOutlined
                : MenuFoldOutlined,
                    {
                        className: "trigger",
                        onClick: toggleH,
                   }
            )
           
        }
        <Layout style={
				{background:'white',
				 display:"inline-block"
				 }}>
				
			</Layout>
        </Header>  
    );
}


export default HeaderH;


