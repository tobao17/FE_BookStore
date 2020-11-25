import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import NavBar from "../component/NavBar/index";
import TopBar from "../component/TopBar";
import CustomerList from "../component/CustomerList";
import Addbook from "./Addbook";
import NotFound from "../../../components/NotFound";
import { Route, Switch, useRouteMatch } from "react-router-dom";
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
	console.log({ match });
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
							<Route exact path={match.url} component={CustomerList} />

							<Route path={`${match.url}/add`} component={Addbook} />
							<Route
								path={`${match.url}/add/ac`}
								component={CustomerList}
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
