import React from "react";
import PropTypes from "prop-types";
import Logo from "../../../../components/Logo";
import SearchField from "../../../../components/SearchField";
import CartItem from "../../../../components/CartItem";
HeaderItemMiddle.propTypes = {};

function HeaderItemMiddle(props) {
	return (
		<div className="header-middle">
			<div className="container">
				<div className="header-left">
					<button className="mobile-menu-toggler">
						<span className="sr-only">Toggle mobile menu</span>
						<i className="icon-bars" />
					</button>
					<Logo></Logo>
				</div>
				{/* End .header-left */}
				<div className="header-right">
					{/* End .header-search */}
					<SearchField></SearchField>
					<CartItem></CartItem>
				</div>
				{/* End .header-right */}
			</div>
			{/* End .container */}
		</div>
	);
}

export default HeaderItemMiddle;
