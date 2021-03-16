import React from "react";
import PropTypes from "prop-types";
import ItemProduct from "../ProductItem";

Hotbooks.propTypes = {};

function Hotbooks(props) {
	return (
		<div className="block">
			<div className="block-wrapper">
				<div className="container">
					<div className="heading heading-flex">
						<div className="heading-left">
							<h2 className="title">Picks From Our Experts</h2>
							{/* End .title */}
						</div>
						{/* End .heading-left */}
						<div className="heading-right">
							<a href="category.html" className="title-link">
								View more Products
								<i className="icon-long-arrow-right" />
							</a>
						</div>
						{/* End .heading-right */}
					</div>
					{/* End .header-flex */}
					<div
						className="owl-carousel carousel-equal-height owl-simple"
						data-toggle="owl"
						data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":5
                                    },
                                    "1440": {
                                        "items":6
                                    }
                                }
                            }'
					>
						<ItemProduct></ItemProduct>
						<ItemProduct></ItemProduct>
						<ItemProduct></ItemProduct>
						<ItemProduct></ItemProduct>
						<ItemProduct></ItemProduct>
						<ItemProduct></ItemProduct>
						<ItemProduct></ItemProduct>
					</div>
					{/* End .owl-carousel */}
				</div>
				{/* End .container */}
			</div>
			{/* End .block-wrapper */}
		</div>
	);
}

export default Hotbooks;
