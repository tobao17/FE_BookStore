import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { Link } from "react-router-dom";
Logo.propTypes = {};

function Logo(props) {
	return (
		<>
			<Link to="/" className="logo">
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
			</Link>
		</>
	);
}

export default Logo;
