import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import billApi from "../../../../api/billApi";
import ToolBar from "../../../../components/ToolBar";
import Listbill from "./listBill";
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
	return (
		<div>
			<ToolBar isOrder={true}></ToolBar>
			<Listbill listbill={listBill}></Listbill>
		</div>
	);
}

export default Bill;
