import React, { Component } from "react";
import { Form, Input, Button, Spin, Card, notification, Typography  } from "antd";
import {
	UserOutlined,
	LockOutlined,
	LoadingOutlined,
	SmileOutlined,
} from "@ant-design/icons";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../redux/actions/auth";
import "../../css/login.css";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Title } = Typography;

class Login extends Component {
	/*Send login data to store auth actions*/
	onFinish = (values) => {
		this.props.onAuth(values.email, values.password);
	};

	rules = (textString) => {
		return [
			{
				required: true,
				message: "Por favor introduce tu " + textString + "!",
			},
		];
	};

	openNotification = () => {
		notification.open({
			message: "Error de inicio de sesión",
			description:
				"El correo o contraseña son inválidos, por favor introduzcalos correctamente",
			icon: <SmileOutlined style={{ color: "#108ee9" }} />,
		});
	};

	/*	UNSAFE_componentWillReceiveProps(newProps) {
		console.log("uno");
		//console.log(localStorage.getItem('token'))
		if (!newProps.loading)
			if (newProps.token !== null) this.props.history.push("/home/");
	}*/

	componentDidUpdate() {
		if (this.props.error != null) {
			this.openNotification();
		} else {
			if (!this.props.loading)
				if (this.props.token !== null)
					this.props.history.push("/home/");
		}
	}

	render() {
		const email = "Correo electrónico";
		const password = "Contraseña";
		return (
			<div 
				className = "main-container"
				style = {{
					height:"100vh",
					background: 'linear-gradient(45deg, #f9f7f7 30%, #dbe2ef 90%)'
				}}
			>
			<div
				className="contenedor card"
				style={{
					display: "flex",
          			justifyContent: "center",
          			alignItems: "center",
					padding: "10vh", 

				}}
			>
				{this.props.loading ? (
					<Spin indicator={antIcon} />
				) : (
					<Card
						title={<Title level={3}>Iniciar sesión</Title>}
						bordered={false}
						style={{ 
							width: 300, 
							
							alignSelf: "center", 
							textAlign: 'center',
							fontWeight: 'bold',
							boxShadow: "2px 3px 1px #9E9E9E"
							/*border: `2px solid black`,
    						background: 'linear-gradient(45deg, #deedf0 30%, #dbe6fd 90%)',*/
    					}}
					>
						<Form
							name="normal_login"
							className="login-form"
							initialValues={{
								remember: true,
							}}
							onFinish={this.onFinish}
						>
							<Form.Item name="email" rules={this.rules(email)}>
								<Input
									prefix={
										<UserOutlined className="site-form-item-icon" />
									}
									placeholder="Correo electrónico"
								/>
							</Form.Item>
							<Form.Item
								name="password"
								rules={this.rules(password)}
							>
								<Input
									prefix={
										<LockOutlined className="site-form-item-icon" />
									}
									type="password"
									placeholder="Password"
								/>
							</Form.Item>
							<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									className="login-form-button"
									style={{ marginRight: 20 }}
								>
									Iniciar Sesión
								</Button>
								O
								<NavLink
									to="/signup/"
									style={{ marginLeft: 20 }}
								>
									Registrate
								</NavLink>
							</Form.Item>
						</Form>
					</Card>
				)}
			</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		error: state.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (email, password) =>
			dispatch(action.authLogin(email, password)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
