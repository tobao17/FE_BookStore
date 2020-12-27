import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ReactDOM from "react-dom";

import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import billApi from "../../../../api/billApi";
import { useDispatch, useSelector } from "react-redux";
import Invoince from "./Invoince";
import "./index.css";

const ref = React.createRef();
BillDetail.propTypes = {};
const useStyles = makeStyles((theme) => ({
	layout: {
		width: "auto",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
			width: 800,
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	paper: {
		marginTop: theme.spacing(0),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(0),
		[theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(0),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	center: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		whiteSpace: "nowrap",
		marginBottom: theme.spacing(1),
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));
function BillDetail(props) {
	const history = useHistory();
	const classes = useStyles();
	const dispatch = useDispatch();
	const { billId } = useParams();
	const Billdetail = useSelector((state) =>
		state.bill.listBill.find((bill) => bill._id === billId)
	);

	useEffect(() => {
		//	lưu data
		function getData() {
			return async () => {
				try {
					await billApi.getAll({}).then((res) => {
						console.log(res);
						if (res.data) {
							dispatch({ type: "GET_BILLS", payload: res.data });
						}
					});
					return;
				} catch (error) {
					console.log(error);
					return;
				}
			};
		}
		if (!Billdetail) getData()();

		return () => {};
	}, []);

	const handleBack = () => {
		history.push("/admin/bill");
		return;
	};

	const handleEdit = async () => {
		return;
	};

	return (
		<>
			<Invoince Billdetail={Billdetail} ref={ref}></Invoince>
		</>
	);
}

export default BillDetail;
