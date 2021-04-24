import * as actionTypes from "../actionTypes";
import axios from "axios";

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START,
	};
};

export const authSuccess = (token) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token: token,
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error,
	};
};

export const logout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("expirationDate");
	return {
		type: actionTypes.AUTH_LOGOUT,
	};
};

export const checkAuthTimeout = (expirationDate) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationDate * 1000);
	};
};

export const authLogin = (email, password) => {
	return (dispatch) => {
		dispatch(authStart());
		axios
			.post("http://127.0.0.1:8000/rest-auth/login/", {
				email: email,
				password: password,
			})
			.then((res) => {
				const token = res.data.key;
				const expirationDate = new Date(
					new Date().getTime() + 3600 * 1000
				);
				console.log("login aceptado: ".concat(expirationDate));
				localStorage.setItem("token", token);
				localStorage.setItem("expirationDate", expirationDate);
				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout(3600));
			})
			.catch((err) => {
				console.log(err);
				dispatch(authFail(err));
			});
	};
};

export const authCheckState = () => {
	return (dispatch) => {
		const token = localStorage.getItem("token");
		//console.log(token.concat("TESTT"));
		if (token === undefined) {
			dispatch(logout());
		} else {
			const expirationDate = new Date(
				localStorage.getItem("expirationDate")
			);
			if (expirationDate <= new Date()) {
				dispatch(logout());
			} else {
				const expirationTime =
					expirationDate.getTime() - new Date().getTime();
				const newDate = expirationTime / 1000;
				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout(newDate));
			}
		}
	};
};
