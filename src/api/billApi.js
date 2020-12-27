import axiosClient from "./axiosClient";
const BillApi = {
	getAll: (params) => {
		const url = "/bill";
		return axiosClient.get(url, { params });
	},
};
export default BillApi;
