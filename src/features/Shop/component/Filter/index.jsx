import React from "react";
import PropTypes from "prop-types";
import FilterItemCategory from "../FilterItemCategory";
import FilterItemBranch from "../FilterItemBranch";
import FilterItemPrice from "../FilterItemPrice";

Filter.propTypes = {};

function Filter(props) {
	return (
		<aside className="col-lg-3 order-lg-first">
			<div className="sidebar sidebar-shop">
				<div className="widget widget-clean">
					<label>Filters:</label>
					<a href="#" className="sidebar-filter-clear">
						Clean All
					</a>
				</div>
				{/* End .widget widget-clean */}
				<FilterItemCategory></FilterItemCategory>

				{/* End .widget */}
				<FilterItemBranch></FilterItemBranch>
				<FilterItemPrice></FilterItemPrice>
				{/* End .widget */}
			</div>
			{/* End .sidebar sidebar-shop */}
		</aside>
	);
}

export default Filter;
