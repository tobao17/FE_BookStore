import React, { useEffect, useState } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Results from "./CustomerList";
import Toolbar from "../../../../components/ToolBar";
import data from "./data";
import userApi from "../../../../api/userApi";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		minHeight: "100%",
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
}));

const CustomerListView = () => {
	const classes = useStyles();
	const listUser = useSelector((state) => state.user.listUser);
	const dispatch = useDispatch();
	const [customers] = useState(data);
	useEffect(() => {
		//	lưu data
		function getData() {
			return async () => {
				try {
					await userApi.getAll({}).then((res) => {
						console.log(res);

						dispatch({ type: "GET_USER", payload: res });
					});
					return;
				} catch (error) {
					console.log(error);
					return;
				}
			};
		}

		getData()();
		return () => {};
	}, []);

	const deleteData = async (value) => {
		console.log(value);
		try {
			await userApi
				.delete(value)
				.then((res) => {
					dispatch({ type: "DELETE_USER", payload: value });
					NotificationManager.success("", "Xóa Thành Công", 1000);
				})
				.catch((err) => {
					if (err) {
						dispatch({
							type: "NOTICE",
							payload: {
								title: "Thông báo",
								msg: " Phiên đăng nhập của bạn đã hết hạn",
							},
						});
					}
					//return;
				});
			return;
		} catch (error) {
			console.log(error);
		}
	};
	function handleDelete(value) {
		deleteData(value);
	}
	function handleFiltersChanse(keyword) {
		if (keyword.keyword == "") {
			function getData() {
				return async () => {
					try {
						await userApi.getAll({}).then((res) => {
							console.log(res);

							dispatch({ type: "GET_USER", payload: res });
						});
						return;
					} catch (error) {
						console.log(error);
						return;
					}
				};
			}
			getData()();
		}
		dispatch({ type: "SEARCH_USER", payload: keyword });
	}

	return (
		<Container maxWidth={false}>
			<NotificationContainer />
			<Toolbar isOrder={true} onSubmit={handleFiltersChanse} />
			<Box mt={3}>
				<Results customers={listUser} onRemoveClick={handleDelete} />
			</Box>
		</Container>
	);
};

export default CustomerListView;
