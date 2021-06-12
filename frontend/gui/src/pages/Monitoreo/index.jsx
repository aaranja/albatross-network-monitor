import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Table, Tag, Space } from 'antd';
const { Column, ColumnGroup } = Table;

const data=[
  {host:'192.168.1.43', state:'Close', port:'22', names:'pc1', times:'2463 sec'},
  {host:'192.168.1.53', state:'Open', port:'22', names:'pc2', times:'23658 sec'},
  {host:'192.18.1.3', 	state:'Close', port:'5', names:'pc34', times:'23354 sec'},
  {host:'192.148.1.43', state:'Open', port:'22', names:'pc51', times:'24533 sec'},
  {host:'192.163.8.43', state:'Close', port:'7', names:'pc56', times:'22323 sec'},
  {host:'192.132.1.43', state:'Open', port:'22', names:'pc17', times:'23423 sec'},
  {host:'192.112.2.43', state:'Close', port:'8', names:'pc87', times:'23423 sec'},
  {host:'192.124.67.43', state:'Open', port:'2', names:'pc46', times:'24324 sec'},
  {host:'192.128.8.43', state:'Close', port:'22', names:'pc78', times:'26333 sec'},
  {host:'192.111.9.43', state:'Close', port:'32', names:'pc86', times:'23464 sec'},
  {host:'192.156.4.43', state:'Open', port:'4', names:'pc35', times:'23467 sec'}
];

class Monitoreo extends Component{
  render(){
    return(
      <div className="App" style={{backgroundColor:"black"}}>
        <Table dataSource={data} style={{backgroundColor:"black"}}>
        <ColumnGroup title="Monitoreo">
          <Column title="Host" dataIndex="host" key="host" />
          <Column title="State" dataIndex="state" key="state"  
            render={state => ( state === "Close" ? <>

                  <Tag color="orange" key={state}>
                      {state}
                    </Tag>
                
                </> : 
                <>
                  <Tag color="geekblue" key={state}>
                      {state}
                    </Tag>
                
                </>
      )} />
          <Column title="Port" dataIndex="port" key="port" />
          <Column title="Name" dataIndex="names" key="name" />
          <Column title="Time" dataIndex="times" key="time" />
        </ColumnGroup>
        </Table >
      </div>
      )
  }
}

export default withRouter(connect()(Monitoreo));