import React from "react";
import PropTypes from "prop-types";

Breadcrumb.propTypes = {};

function Breadcrumb(props) {
	return (
		<>
			<nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
				<div className="container">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="index.html">
								<font style={{ verticalAlign: "inherit" }}>
									<font style={{ verticalAlign: "inherit" }}>
										Trang Chủ
									</font>
								</font>
							</a>
						</li>
						<li className="breadcrumb-item">
							<a href="#">
								<font style={{ verticalAlign: "inherit" }}>
									<font style={{ verticalAlign: "inherit" }}>
										cửa tiệm
									</font>
								</font>
							</a>
						</li>
					</ol>
				</div>
				{/* End .container */}
			</nav>
			<br></br>
		</>
	);
}

export default Breadcrumb;
