import React from "react";
import PropTypes from "prop-types";
import ItemProduct from "../ProductItem";

Betseller.propTypes = {};
var product = [1, 2, 3, 4, 5];
function Betseller(props) {
	return (
		<div className="bestseller-products bg-light pt-5 pb-5 mb-5">
			<div className="block">
				<div className="block-wrapper">
					<div className="container">
						<div className="heading heading-flex">
							<div className="heading-left">
								<h2 className="title">Bestsellers</h2>
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
                                      "1440": {
                                          "items":5
                                      }
                                  }
                              }'
						>
							{product.map((item) => (
								<ItemProduct></ItemProduct>
							))}{" "}
						</div>
						{/* End .owl-carousel */}
					</div>
					{/* End .container */}
				</div>
				{/* End .block-wrapper */}
			</div>
			{/* End .block */}
		</div>
	);
}

export default Betseller;
