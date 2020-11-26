import axiosClient from "./axiosClient";
const productApi = {
	getAll: (params) => {
		const url = "/books";
		return axiosClient.get(url, { params });
	},
	create: (data) => {
		const url = `/books/create`;
		return axiosClient.post(url, data);
	},
	get: (id) => {
		const url = `/products/${id}`;
		return axiosClient.get(url);
	},
	delete: (id) => {
		const url = `/books/delete/${id}`;
		return axiosClient.get(url);
	},
};

export default productApi;
