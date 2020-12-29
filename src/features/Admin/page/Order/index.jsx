import React, { useEffect } from "react";
import OrderList from "./LatestOrders";
import ToolBar from "../../../../components/ToolBar";
import orderApi from "../../../../api/orderApi";
import { useDispatch, useSelector } from "react-redux";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";
function Order(props) {
	const listOrder = useSelector((state) => state.order.listOrder);
	const isNotice = useSelector((state) => state.notice.msg);
	const dispatch = useDispatch();
	useEffect(() => {
		//	lưu data
		function getData() {
			return async () => {
				try {
					await orderApi.getAll({}).then((res) => {
						//		console.log(res);
						if (res.data) {
							dispatch({ type: "GET_ORDERS", payload: res.data });
						}
					});

					return;
				} catch (error) {
					console.log(error);
					return;
				}
			};
		}
		if (listOrder.length === 0) getData()();
		if (isNotice.length !== 0) {
			const { titlle, msg } = isNotice[0];
			NotificationManager.success(msg, titlle, 1000);
			dispatch({
				type: "NOTICE",
				payload: {},
			});
			// tra ve null
		}

		return () => {};
	}, []);

	const FiltersData = async (keyword) => {
		try {
			console.log(keyword);
			await orderApi.search(keyword).then((res) => {
				if (res.data) {
					dispatch({ type: "SEARCH_ORDER", payload: res.data });
				}
			});
		} catch (error) {}
	};

	function handleFiltersChanse(keyword) {
		//console.log(keyword);
		FiltersData(keyword);

		//	console.log(keyword);
	}

	return (
		<div>
			<ToolBar isOrder={true} onSubmit={handleFiltersChanse}></ToolBar>
			<OrderList listOrder={listOrder}></OrderList>
			<NotificationContainer />
		</div>
	);
}

export default Order;
