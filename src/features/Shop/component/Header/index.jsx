import React from "react";
import PropTypes from "prop-types";

import HeaderItemTop from "../HeaderItemTop";
import HeaderItemMiddle from "../HeaderItemMiddle";
import HeaderItemBottom from "../HeaderItemBottom";

Header.propTypes = {};

function Header(props) {
	return (
		<header className="header header-12">
			<HeaderItemTop></HeaderItemTop>
			<HeaderItemMiddle></HeaderItemMiddle>
			<HeaderItemBottom></HeaderItemBottom>
		</header>
	);
}

export default Header;
