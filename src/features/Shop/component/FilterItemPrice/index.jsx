import React from "react";
import PropTypes from "prop-types";

FilterItemPrice.propTypes = {};

function FilterItemPrice(props) {
	return (
		<div className="widget widget-collapsible">
			<h3 className="widget-title">
				<a
					data-toggle="collapse"
					href="#widget-5"
					role="button"
					aria-expanded="true"
					aria-controls="widget-5"
				>
					Price
				</a>
			</h3>
			{/* End .widget-title */}
			<div className="collapse show" id="widget-5">
				<div className="widget-body">
					<div className="filter-price">
						<div className="filter-price-text">
							Price Range:
							<span id="filter-price-range" />
						</div>
						{/* End .filter-price-text */}
						<div id="price-slider" />
						{/* End #price-slider */}
					</div>
					{/* End .filter-price */}
				</div>
				{/* End .widget-body */}
			</div>
			{/* End .collapse */}
		</div>
	);
}

export default FilterItemPrice;
