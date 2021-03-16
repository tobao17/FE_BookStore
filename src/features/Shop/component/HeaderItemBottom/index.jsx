import React from "react";
import PropTypes from "prop-types";

HeaderItemBottom.propTypes = {};

function HeaderItemBottom(props) {
	return (
		<div className="header-bottom sticky-header">
			<div className="container">
				<div
					style={{
						backgroundColor: "#333",
						display: "flex",
						width: "100%",
					}}
				>
					<div className="header-left">
						<div className="dropdown category-dropdown">
							<a
								href="#"
								className="dropdown-toggle"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								data-display="static"
								title="Browse Categories"
							>
								Book Categories
							</a>
							<div className="dropdown-menu">
								<nav className="side-nav">
									<ul className="menu-vertical sf-arrows">
										<li className="item-lead">
											<a href="#">Best Books of 2018</a>
										</li>
										<li className="item-lead">
											<a href="#">New for 2019</a>
										</li>
										<li>
											<a href="#">Art &amp; Photography</a>
										</li>
										<li>
											<a href="#">Biography</a>
										</li>
										<li>
											<a href="#">Children's Books</a>
										</li>
										<li>
											<a href="#">Crafts &amp; Hobbies</a>
										</li>
										<li>
											<a href="#">Fiction</a>
										</li>
										<li>
											<a href="#">Food &amp; Drink</a>
										</li>
										<li>
											<a href="#">
												Graphic Novels, Anime &amp; Manga
											</a>
										</li>
										<li>
											<a href="#">Health &amp; Fitness Books</a>
										</li>
										<li>
											<a href="#">Young Adult</a>
										</li>
									</ul>
									{/* End .menu-vertical */}
								</nav>
								{/* End .side-nav */}
							</div>
							{/* End .dropdown-menu */}
						</div>
						{/* End .category-dropdown */}
					</div>
					{/* End .header-left */}
					<div className="header-center">
						<nav className="main-nav">
							<ul className="menu sf-arrows">
								<li className="megamenu-container active">
									<a href="index.html">Home</a>
								</li>
								<li>
									<a href="category.html">Shop</a>
								</li>
								<li>
									<a href="product.html">Product</a>
								</li>
								<li>
									<a href="blog.html">Blog</a>
								</li>
							</ul>
							{/* End .menu */}
						</nav>
						{/* End .main-nav */}
					</div>
					<div className="header-right">
						<i className="la la-lightbulb-o" />
						<p>Clearance Up to 30% Off</p>
					</div>
					{/* End .header-right */}
				</div>
			</div>
			{/* End .container */}
		</div>
	);
}

export default HeaderItemBottom;
