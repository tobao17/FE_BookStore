import axiosClient from "./axiosClient";
const OrderApi = {
	getAll: (params) => {
		const url = "/order";
		return axiosClient.get(url, { params });
	},
};
export default OrderApi;
