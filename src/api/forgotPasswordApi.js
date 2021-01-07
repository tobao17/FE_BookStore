import axiosClient from "./axiosClient";
const forgotPasswordApi = {
	reset: (data) => {
		const url = "/user/resetpassword";
		return axiosClient.post(url, data);
	},
	forgetPassword: (data) => {
		const url = `/user/forgetpassword`;
		return axiosClient.post(url, data);
	},
};
export default forgotPasswordApi;
