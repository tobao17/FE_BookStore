import React from "react";
import PropTypes from "prop-types";

Subcribe.propTypes = {};

function Subcribe(props) {
	return (
		<div className="cta-newsletter text-center pt-6 pb-7">
			<div className="container">
				<span className="cta-icon">
					<i className="icon-envelope" />
				</span>
				<h3 className="title">Subscribe for Our Newsletter</h3>
				{/* End .title */}
				<p className="title-desc">
					Learn about new offers and get more deals by joining our
					newsletter
				</p>
				{/* End .title-desc */}
				<form action="#">
					<div className="input-group">
						<input
							type="email"
							className="form-control"
							placeholder="Enter your Email Address"
							aria-label="Email Adress"
							aria-describedby="newsletter-btn"
							required
						/>
						<div className="input-group-append">
							<button
								className="btn btn-primary"
								type="submit"
								id="newsletter-btn"
							>
								<span>SUBSCRIBE</span>
								<i className="icon-long-arrow-right" />
							</button>
						</div>
						{/* .End .input-group-append */}
					</div>
					{/* .End .input-group */}
				</form>
			</div>
			{/* End .container */}
		</div>
	);
}

export default Subcribe;
