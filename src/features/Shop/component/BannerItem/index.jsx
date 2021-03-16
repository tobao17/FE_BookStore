import React from "react";
import PropTypes from "prop-types";

BannerItem.propTypes = {};

function BannerItem(props) {
	return (
		<div className="col-md-6 col-lg-4">
			<div className="banner banner-overlay">
				<a href="#">
					<img
						src="assets/images/demos/demo-20/banners/banner-8.jpg"
						alt="Banner"
					/>
				</a>
				<div className="banner-content">
					<h4 className="banner-subtitle text-white">
						<a href="#">New York Times Bestsellers</a>
					</h4>
					{/* End .banner-subtitle */}
					<h3 className="banner-title text-white">
						<a href="#">
							Bestselling Food <br />
							and Drink Books.
						</a>
					</h3>
					{/* End .banner-title */}
					<a href="#" className="btn btn-outline-white-3 banner-link">
						Discover Now
						<i className="icon-long-arrow-right" />
					</a>
				</div>
				{/* End .banner-content */}
			</div>
			{/* End .banner */}
		</div>
	);
}

export default BannerItem;
