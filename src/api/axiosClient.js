import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: { "content-type": "application/json" },

	paramsSerializer: function (params) {
		return queryString.stringify(params);
	},

	// pass params object (query string {q: x, a: y}) -> auto match with url string (?q=x&a=y)
});

// axiosClient.interceptors.request.use(function (config) {
// 	// Do something before request is sent
// 	let token = getAccessToken();
// 	if (token || token !== "undefined") {
// 		config.headers.Authorization = `Bearer ${token}`;
// 	}
// 	return config;
// });
// Add a request interceptor
axios.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

export default axiosClient;
