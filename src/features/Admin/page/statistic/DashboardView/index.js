import React, { useEffect, useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";

import Budget from "./Budget";
import LatestOrders from "./LatestOrders";
import LatestProducts from "./LatestProducts";
import Sales from "./Sales";
import TasksProgress from "./TasksProgress";
import TotalCustomers from "./TotalCustomers";
import TotalProfit from "./TotalProfit";
import TrafficByDevice from "./TrafficByDevice";
import orderApi from "../../../../../api/orderApi";
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,

		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
}));

const Dashboard = () => {
	const classes = useStyles();
	const [budget, setBudget] = useState(0);
	const [totalCustomer, setTotalCustomer] = useState(0);
	const [totalProduct, setTotalProduct] = useState(0);
	const [totalOrder, setTotalOrder] = useState(0);
	const [totalOrderBugetByDate, setTotalOrderBugetByDate] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const { data } = await orderApi.statistical();
				console.log(data);
				setBudget(data.totalOrderBuget[0].totalAmount);
				setTotalCustomer(data.totalCustomer);
				setTotalProduct(data.totalProduct);
				setTotalOrder(data.totalOrder);
				setTotalOrderBugetByDate(data.totalOrderBugetByDate);
			} catch (e) {
				// Some fetch error
			}
		})();
	}, []);

	return (
		<Container maxWidth={false}>
			<Grid container spacing={5}>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<Budget budget={budget}> </Budget>
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TotalCustomers totalCustomer={totalCustomer}> </TotalCustomers>
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TasksProgress totalProduct={totalProduct}></TasksProgress>
				</Grid>
				<Grid item lg={3} sm={6} xl={3} xs={12}>
					<TotalProfit totalOrder={totalOrder}></TotalProfit>
				</Grid>
				<Grid item lg={8} md={12} xl={9} xs={12}>
					<Sales totalOrderBugetByDate={totalOrderBugetByDate}></Sales>
				</Grid>
				<Grid item lg={4} md={6} xl={3} xs={12}>
					<TrafficByDevice />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Dashboard;
