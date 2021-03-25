import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "./page/Home";
import Product from "./page/Product";
import NotFound from "../../components/NotFound";
import Header from "./component/Header";
import Footer from "./component/Footer";
const Shop = (props) => {
	const match = useRouteMatch();
	console.log(match.path);
	return (
		<>
			<Header></Header>
			<Switch>
				<Redirect from="/home" to="/" exact></Redirect>
				<Route path={match.path} component={Home} exact></Route>
				<Route
					path={`${match.path}\product`}
					component={Product}
					exact
				></Route>
				<Route component={NotFound}></Route>
			</Switch>
			<Footer></Footer>
		</>
	);
};

Shop.propTypes = {};

export default Shop;