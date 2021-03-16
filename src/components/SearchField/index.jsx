import React from "react";
import PropTypes from "prop-types";

SearchField.propTypes = {};

function SearchField(props) {
	return (
		<div className="header-search header-search-extended header-search-visible header-search-no-radius">
			<a href="#" className="search-toggle" role="button">
				<i className="icon-search" />
			</a>
			<form action="#" method="get">
				<div className="header-search-wrapper search-wrapper-wide">
					<label htmlFor="q" className="sr-only">
						Search
					</label>
					<input
						type="search"
						className="form-control"
						name="q"
						id="q"
						placeholder="Search product,category,author,..."
						required
					/>
					<button className="btn btn-primary" type="submit">
						<i className="icon-search" />
					</button>
				</div>
			</form>
		</div>
	);
}

export default SearchField;
