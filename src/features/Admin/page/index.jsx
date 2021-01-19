import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import NavBar from "../../../components/NavBar";
import TopBar from "../../../components/TopBar";
import ProductList from "../page/ProductList/index";
import Addbook from "./Addbook";
import Order from "./Order";
import OrderEdit from "./Order/EditOrder";
import CustomerList from "./Customer/index";
import Bill from "./Bill";
import BillDetail from "./BillDetail";
import NotFound from "../../../components/NotFound";
import orderApi from "../../../api/orderApi";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
let socket;
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		display: "flex",
		height: "100%",
		overflow: "hidden",
		width: "100%",
	},
	wrapper: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden",
		paddingTop: 64,
		[theme.breakpoints.up("lg")]: {
			paddingLeft: 256,
		},
	},
	contentContainer: {
		display: "flex",
		flex: "1 1 auto",
		overflow: "hidden",
	},
	content: {
		flex: "1 1 auto",
		height: "100%",
		overflow: "auto",
	},
}));

const DashboardLayout = () => {
	const classes = useStyles();
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);
	const match = useRouteMatch();
	const dispatch = useDispatch();
	console.log({ match });

	useEffect(() => {
		socket = io(ENDPOINT);
		socket.on("server send order", (data) => {
			dispatch({ type: "NOTICEORDER_NEW", payload: data });
		});
	}, []);
	useEffect(() => {
		//	lưu data

		function getData() {
			return async () => {
				try {
					await orderApi.announce().then((res) => {
						console.log(res.data);
						//		console.log(res);
						if (res.data) {
							dispatch({ type: "NOTICEORDER", payload: res.data });
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
	}, []);
	return (
		<div className={classes.root}>
			<TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
			<NavBar
				onMobileClose={() => setMobileNavOpen(false)}
				openMobile={isMobileNavOpen}
			/>
			<div className={classes.wrapper}>
				<div className={classes.contentContainer}>
					<div className={classes.content}>
						<Switch>
							<Route
								exact
								path={`${match.url}/book`}
								component={ProductList}
							/>
							<Route
								path={`${match.url}/book/add`}
								component={Addbook}
							/>
							<Route
								path={`${match.url}/book/edit/:bookId`}
								component={Addbook}
							/>
							<Route
								exact
								path={`${match.url}/order`}
								component={Order}
							/>
							<Route
								path={`${match.url}/order/edit/:orderId`}
								component={OrderEdit}
							/>
							<Route
								path={`${match.url}/user`}
								component={CustomerList}
							/>
							<Route exact path={`${match.url}/bill`} component={Bill} />
							<Route
								path={`${match.url}/bill/detail/:billId`}
								component={BillDetail}
							/>
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
