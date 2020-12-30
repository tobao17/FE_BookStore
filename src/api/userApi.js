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
};
export default userApi;
