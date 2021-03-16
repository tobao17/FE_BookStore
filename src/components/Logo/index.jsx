import React from "react";
import PropTypes from "prop-types";
import "./index.css";
Logo.propTypes = {};

function Logo(props) {
	return (
		<>
			<a href="index.html" className="logo">
				<img
					src="assets/images/—Pngtree—open book_5054230.png"
					alt="Molla Logo"
					width={60}
					height={20}
				/>
				<div class="site-branding-text">
					<p class="site-title">maptoabo</p>
					<p class="site-description">Inclusive bookstore</p>
				</div>
			</a>
		</>
	);
}

export default Logo;
