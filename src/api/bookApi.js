import axiosClient from "./axiosClient";
const productApi = {
	getAll: (params) => {
		const url = "/books";
		return axiosClient.get(
			url,

			{
				headers: {
					"content-type": "application/json",
					"x-access-token": localStorage.getItem("token"),
					//dua vao headers
				},
			}
		);
	},
	create: (data) => {
		const url = `/books/create`;
		return axiosClient.post(url, data, {
			headers: {
				"content-type": "application/json",
				"x-access-token": localStorage.getItem("token"),
				//dua vao headers
			},
		});
	},
	update: (data) => {
		const url = `/books/update`;
		return axiosClient.post(url, data, {
			headers: {
				"content-type": "application/json",
				"x-access-token": localStorage.getItem("token"),
				//dua vao headers
			},
		});
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
		return axiosClient.get(url, {
			headers: {
				"content-type": "application/json",
				"x-access-token": localStorage.getItem("token"),
				//dua vao headers
			},
		});
	},
};

export default productApi;
