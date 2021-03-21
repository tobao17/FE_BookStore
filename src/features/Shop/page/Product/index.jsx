import React from "react";
import PropTypes from "prop-types";
import ItemProduct from "../../component/ProductItem";
import Filter from "../../component/Filter";
import Pagenavigation from "../../component/Pagenavigation";
import "../Product/index.css";
import ProductGroup from "../../component/ProductGroup";
import FilterItemSort from "../../component/FilterItemSort";
import Breadcrumb from "../../component/Breadcrumb";

Product.propTypes = {};

function Product(props) {
	return (
		<>
			<Breadcrumb></Breadcrumb>
			<div className="page-content">
				<div className="container container_Product">
					<div className="row">
						<div className="col-lg-9">
							<div className="toolbox">
								<div className="toolbox-left">
									<div className="toolbox-info">
										Showing <span>9 of 56</span> Products
									</div>
									{/* End .toolbox-info */}
								</div>
								{/* End .toolbox-left */}
								<FilterItemSort></FilterItemSort>
								{/* End .toolbox-right */}
							</div>
							{/* End .toolbox */}
							<ProductGroup></ProductGroup>
							{/* End .products */}
							<Pagenavigation></Pagenavigation>
						</div>
						{/* End .col-lg-9 */}
						<Filter></Filter>
						{/* End .col-lg-3 */}
					</div>
					{/* End .row */}
				</div>
				{/* End .container */}
			</div>
		</>
	);
}

export default Product;
