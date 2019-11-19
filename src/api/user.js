import axios from 'axios'
import qs from "qs";

// token登录
export const wxLogin = (username, password) => {
	return axios.request({
		url: '/wxLogin.action',
		method: 'POST',
		data: qs.stringify({
			"username": username,
			"password": password
		})
	})
};
// token 刷新
export const refreshToken = (refresh_token) => {
	return axios.request({
		url: '/wxLogin!refreshToken.action',
		method: 'POST',
		data: qs.stringify({
			"grant_type": "grant_type",
			"refresh_token": refresh_token,
			"scope": "all"
		})
	})
}