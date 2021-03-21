import React from "react";
import PropTypes from "prop-types";

FilterItemSort.propTypes = {};

function FilterItemSort(props) {
	return (
		<div className="toolbox-right">
			{/* End .toolbox-sort */}

			{/* End .toolbox-layout */}

			<div className="toolbox-sort">
				<label htmlFor="sortby">Sort by:</label>
				<div className="select-custom">
					<select name="sortby" id="sortby" className="form-control">
						<option value="popularity" selected="selected">
							Most Popular
						</option>
						<option value="rating">Most Rated</option>
						<option value="date">Date</option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default FilterItemSort;
