import axiosClient from "./axiosClient";
const userApi = {
	getAll: (params) => {
		const url = "/user";
		return axiosClient.get(url, { params });
	},
	search: (data) => {
		const url = `/order/search`;
		return axiosClient.post(url, data);
	},
	login: (data) => {
		const url = `user/login`;
		return axiosClient.post(url, data);
	},

	logingg: (data) => {
		const url = `user/signingg`;
		return axiosClient.post(url, data);
	},
	loginfb: (data) => {
		const url = `user/signinfb`;
		return axiosClient.post(url, data);
	},
};
export default userApi;
