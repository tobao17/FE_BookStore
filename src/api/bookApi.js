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
	update: (data) => {
		const url = `/books/update`;
		return axiosClient.post(url, data);
	},

	search: (data) => {
		const url = `/books/search`;
		return axiosClient.post(url, data);
	},

	getOne: (id) => {
		const url = `/books/getbook/${id}`;
		return axiosClient.get(url);
	},

	delete: (id) => {
		const url = `/books/delete/${id}`;
		return axiosClient.get(url);
	},
};

export default productApi;
