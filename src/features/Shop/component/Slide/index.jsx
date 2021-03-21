import React from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
Slide.propTypes = {};

function Slide(props) {
	return (
		<>
			{" "}
			<div className="intro-section bg-lighter pt-5 pb-6 ">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<OwlCarousel
								className="owl-theme intro-slider-container mb-2 mb-lg-0"
								items={1}
								loop
								margin={0}
								nav
							>
								<div class="item">
									<div className="intro-slide">
										<figure className="slide-image">
											<picture>
												<img
													src="assets/images/slider/slide-1.jpg"
													alt="Image Desc"
												/>
											</picture>
										</figure>
									</div>
								</div>
								<div class="item">
									<h4>2</h4>
								</div>
								<div class="item">
									<h4>3</h4>
								</div>
								<div class="item">
									<h4>4</h4>
								</div>
								<div class="item">
									<h4>5</h4>
								</div>
							</OwlCarousel>

							{/* End .intro-slider-container */}
						</div>
						{/* End .col-lg-8 */}
						<div className="col-lg-4">
							<div className="intro-banners">
								<div className="row row-sm">
									<div className="col-md-6 col-lg-12">
										<div className="banner banner-display">
											<a href="#">
												<img
													src="assets/images/banners/home/intro/banner-1.jpg"
													alt="Banner"
												/>
											</a>
											<div className="banner-content">
												<h4 className="banner-subtitle text-darkwhite">
													<a href="#">Clearence</a>
												</h4>
												{/* End .banner-subtitle */}
												<h3 className="banner-title text-white">
													<a href="#">
														Chairs &amp; Chaises <br />
														Up to 40% off
													</a>
												</h3>
												{/* End .banner-title */}
												<a
													href="#"
													className="btn btn-outline-white banner-link"
												>
													Shop Now
													<i className="icon-long-arrow-right" />
												</a>
											</div>
											{/* End .banner-content */}
										</div>
										{/* End .banner */}
									</div>
									{/* End .col-md-6 col-lg-12 */}
									<div className="col-md-6 col-lg-12">
										<div className="banner banner-display mb-0">
											<a href="#">
												<img
													src="assets/images/banners/home/intro/banner-2.jpg"
													alt="Banner"
												/>
											</a>
											<div className="banner-content">
												<h4 className="banner-subtitle text-darkwhite">
													<a href="#">New in</a>
												</h4>
												{/* End .banner-subtitle */}
												<h3 className="banner-title text-white">
													<a href="#">
														Best Lighting <br />
														Collection
													</a>
												</h3>
												{/* End .banner-title */}
												<a
													href="#"
													className="btn btn-outline-white banner-link"
												>
													Discover Now
													<i className="icon-long-arrow-right" />
												</a>
											</div>
											{/* End .banner-content */}
										</div>
										{/* End .banner */}
									</div>
									{/* End .col-md-6 col-lg-12 */}
								</div>
								{/* End .row row-sm */}
							</div>
							{/* End .intro-banners */}
						</div>
						{/* End .col-lg-4 */}
					</div>
					{/* End .row */}
					<div className="mb-6" />
					{/* End .mb-6 */}
					<div
						className="owl-carousel owl-simple"
						data-toggle="owl"
						data-owl-options='{
                            "nav": false, 
                            "dots": false,
                            "margin": 30,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "420": {
                                    "items":3
                                },
                                "600": {
                                    "items":4
                                },
                                "900": {
                                    "items":5
                                },
                                "1024": {
                                    "items":6
                                }
                            }
                        }'
					>
						<a href="#" className="brand">
							<img src="assets/images/brands/1.png" alt="Brand Name" />
						</a>
						<a href="#" className="brand">
							<img src="assets/images/brands/2.png" alt="Brand Name" />
						</a>
						<a href="#" className="brand">
							<img src="assets/images/brands/3.png" alt="Brand Name" />
						</a>
						<a href="#" className="brand">
							<img src="assets/images/brands/4.png" alt="Brand Name" />
						</a>
						<a href="#" className="brand">
							<img src="assets/images/brands/5.png" alt="Brand Name" />
						</a>
						<a href="#" className="brand">
							<img src="assets/images/brands/6.png" alt="Brand Name" />
						</a>
					</div>
					{/* End .owl-carousel */}
				</div>
				{/* End .container */}
			</div>
			{/* End .bg-lighter */}
		</>
	);
}

export default Slide;
