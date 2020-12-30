import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import billApi from "../../../../api/billApi";
import ToolBar from "../../../../components/ToolBar";
import Listbill from "./listBill";
import "react-notifications/lib/notifications.css";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";
Bill.propTypes = {};

function Bill(props) {
	const dispatch = useDispatch();
	const listBill = useSelector((state) => state.bill.listBill);
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
		if (listBill.length === 0) getData()();

		return () => {};
	}, []);
	const deleteData = async (value) => {
		//console.log(value);
		try {
			await billApi.delete(value).then((res) => {
				if (res.data) {
					dispatch({ type: "DELETE_BILL", payload: value });
					NotificationManager.success("", "Xóa Thành Công", 1000);
				} else {
					NotificationManager.success("", "Xóa Thành Công", 1000);
				}
			});
			return;
		} catch (error) {
			console.log(error);
		}
	};
	function handleDelete(value) {
		deleteData(value);
	}
	return (
		<div>
			<NotificationContainer />
			<ToolBar isOrder={true}></ToolBar>
			<Listbill onRemoveClick={handleDelete} listbill={listBill}></Listbill>
		</div>
	);
}

export default Bill;
