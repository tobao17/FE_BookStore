import React from "react";
import Order from "./LatestOrders";
import ToolBar from "../../../../components/ToolBar";
function index(props) {
	return (
		<div>
			<ToolBar isOrder={true}></ToolBar>
			<Order></Order>
		</div>
	);
}

export default index;
