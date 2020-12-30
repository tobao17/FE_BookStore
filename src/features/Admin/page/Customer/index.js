import React, { useEffect, useState } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Results from "./CustomerList";
import Toolbar from "../../../../components/ToolBar";
import data from "./data";
import userApi from "../../../../api/userApi";
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
		// if (listBill.length === 0) getData()();
		getData()();
		return () => {};
	}, []);

	return (
		<Container maxWidth={false}>
			<Toolbar isOrder={true} />
			<Box mt={3}>
				<Results customers={listUser} />
			</Box>
		</Container>
	);
};

export default CustomerListView;
