import React from "react";
import PropTypes from "prop-types";
import BannerItem from "../BannerItem";

BannerGroup.propTypes = {};

function BannerGroup(props) {
	return (
		<div>
			<div className="mb-5" />
			{/* End .mb-3 */}
			<div className="banner-group mb-2">
				<div className="container">
					<div className="row justify-content-center">
						<BannerItem></BannerItem>
						<BannerItem></BannerItem>
						<BannerItem></BannerItem>
					</div>
					{/* End .row */}
				</div>
				{/* End .container */}
			</div>
			{/* End .banner-group */}
		</div>
	);
}

export default BannerGroup;
