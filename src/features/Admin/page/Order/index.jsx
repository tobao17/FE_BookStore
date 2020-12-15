import React, { useEffect } from "react";
import OrderList from "./LatestOrders";
import ToolBar from "../../../../components/ToolBar";
import orderApi from "../../../../api/orderApi";
import { useDispatch, useSelector } from "react-redux";

function Order(props) {
	const listOrder = useSelector((state) => state.order.listOrder);
	const dispatch = useDispatch();
	useEffect(() => {
		//	lưu data
		function getData() {
			return async () => {
				try {
					await orderApi.getAll({}).then((res) => {
						console.log(res);
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

		getData()();

		return () => {};
	}, []);
	return (
		<div>
			<ToolBar isOrder={true}></ToolBar>
			<OrderList listOrder={listOrder}></OrderList>
		</div>
	);
}

export default Order;
