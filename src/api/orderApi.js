import axiosClient from "./axiosClient";
const OrderApi = {
	getAll: (params) => {
		const url = "/order";
		return axiosClient.get(url, { params });
	},
	getOne: (id) => {
		const url = `/order/detail/${id}`;
		return axiosClient.get(url);
	},
	announce: () => {
		const url = `/order/announce`;
		return axiosClient.get(url);
	},
	update: (data) => {
		const url = `/order/update`;
		return axiosClient.post(url, data);
	},
	create: (data) => {
		const url = `/order/add`;
		return axiosClient.post(url, data, {
			headers: {
				"content-type": "application/json",
				"x-access-token": localStorage.getItem("token"),
				//dua vao headers
			},
		});
	},
	search: (data) => {
		const url = `/order/search`;
		return axiosClient.post(url, data);
	},
};
export default OrderApi;
