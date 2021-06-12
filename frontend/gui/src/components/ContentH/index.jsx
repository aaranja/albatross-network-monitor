import React, { Component,useState,useMemo } from "react";
//import { Layout} from "antd";
import Login from "../../pages/Login";
import { Tabs, Button, Divider, Checkbox,Layout,Drawer } from 'antd';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  MenuUnfoldOutlined,
	MenuFoldOutlined,
	BarsOutlined,
  WindowsFilled
} from "@ant-design/icons";
import Monitoreo from "../../pages/Monitoreo";
import Diagnostico from "../../pages/Diagnostico";
import Bitacora from "../../pages/Bitacora";

const ContentH = (props) => {

    const {index,stateH,toggleH,loginv} = props;
    const { TabPane } = Tabs;
    const {Group} = Checkbox;
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };

    const OperationsSlot = {
        left: 
        <div style={{margin:10}}>
            <Button 
            icon={stateH.collapsed?<MenuUnfoldOutlined/>:<MenuFoldOutlined/>} 
            onClick={toggleH}
            />
        </div>
        ,
        right: 
        <div style={{margin:10}}>
            <Button icon={<BarsOutlined />} onClick={showDrawer}/>
        </div>
        
    };
  const [position, setPosition] = useState(['left', 'right']);

  const slot = useMemo(() => {

    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {},
    );
  }, [position]);

  return (
    <>
      
      <Divider />
      {/*<CheckboxGroup
        options={options}
        value={position}
        onChange={value => {
          setPosition(value);
        }}
      />
      <br />
      <br />*/}
      <Tabs tabBarExtraContent={slot} tabBarStyle={{ marginRight:0,marginLeft:16,paddingHorizontal:6}}>
        <TabPane style={{background:"white",height:480,flex:1,margin:10}} tab="Monitoreo" key="1" >
         <Monitoreo />
        </TabPane>
        <TabPane style={{background:"white",height:480,flex:1,margin:10}} tab="Bitacora" key="2">
          <Bitacora />
        </TabPane>
        <TabPane style={{background:"white",height:480,flex:1,margin:10}} tab="Diagnostico" key="3">
         <Diagnostico/>
        </TabPane>
      </Tabs>
      <Drawer
        title="Nombre del usuario"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
  
        <a href="/login"  style = {{ color:"black",margin:5}}>Iniciar sesion</a>
        <a href="/login"  style = {{color:"black",margin:5}}>Registrarse</a>
      </Drawer>
    </>
  );
};

export default withRouter(connect()(ContentH));


/*
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

const App = () => {
 

  return (
    <>
      <Button type="primary" >
        Open
      </Button>
     
    </>
  );
};

ReactDOM.render(<App />, mountNode);


//const { Content} = Layout;
/*
const ContentH = (props) => {

    const {index} = props;

    return(
        <Content className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 0,
                        minHeight: 280,
                    }}
                >
                diagnostico
                </Content>  
        );
    
}

export default ContentH;*/



