import React from "react";
import PropTypes from "prop-types";
import AddFrom from "./AddFrom";
index.propTypes = {};

function index(props) {
	function handleSubmit(value) {
		console.log(value);
	}

	return (
		<div>
			<AddFrom onSubmit={handleSubmit}></AddFrom>
		</div>
	);
}

export default index;
