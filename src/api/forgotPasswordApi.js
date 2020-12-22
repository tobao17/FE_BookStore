import axiosClient from "./axiosClient";
const forgotPasswordApi = {
	reset: (data) => {
		const url = "/user/resetpassword";
		return axiosClient.post(url, data);
	},
};
export default forgotPasswordApi;
