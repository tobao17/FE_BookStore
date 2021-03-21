import React from "react";
import PropTypes from "prop-types";
import Slide from "../../component/Slide";
import Betseller from "../../component/Bestseller";
import Newrelease from "../../component/Newrelease";
import BannerGroup from "../../component/BannerGroup";
import Hotbooks from "../../component/Hotbooks";
import Bloghome from "../../component/Bloghome";
import Subcribe from "../../component/Subcribe";

Home.propTypes = {};

function Home(props) {
	return (
		<div>
			<Slide></Slide>
			<Betseller></Betseller>
			<Newrelease></Newrelease>
			<BannerGroup></BannerGroup>
			<Hotbooks></Hotbooks>
			<Bloghome></Bloghome>
			<Subcribe></Subcribe>
		</div>
	);
}

export default Home;
