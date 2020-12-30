import axiosClient from "./axiosClient";
const BillApi = {
	getAll: (params) => {
		const url = "/bill";
		return axiosClient.get(url, { params });
	},
	delete: (id) => {
		const url = `/bill/delete/${id}`;
		return axiosClient.get(url);
	},
	search: (data) => {
		const url = `/bill/search`;
		return axiosClient.post(url, data);
	},
};
export default BillApi;
