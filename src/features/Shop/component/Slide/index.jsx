import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./index.css";

Slide.propTypes = {};

function Slide(props) {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		adaptiveHeight: true,
		slidesToScroll: 1,
		// /	autoplay: true,
		// speed: 2000,
		// autoplaySpeed: 2000,
		//cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],

		// customPaging: (i) => (
		// 	<div
		// 		style={{
		// 			width: "30px",
		// 			color: "blue",
		// 			border: "1px blue solid",
		// 		}}
		// 	>
		// 		{i + 1}
		// 	</div>
		// ),
	};
	return (
		<>
			{" "}
			<div className="intro-section bg-lighter pt-5 pb-6 ">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 slider-container-1">
							<Slider {...settings}>
								<div>
									<div className="intro-slide">
										<figure className="slide-image">
											<picture>
												<img
													src="assets/images/slider/slide-1.jpg"
													alt="Image Desc"
												/>
											</picture>
										</figure>
										<div className="intro-content">
											<h3 className="intro-subtitle">
												Topsale Collection
											</h3>
											{/* End .h3 intro-subtitle */}
											<h1 className="intro-title">
												Living Room
												<br />
												Furniture
											</h1>
											{/* End .intro-title */}
											<a
												href="category.html"
												className="btn btn-outline-white"
											>
												<span>SHOP NOW</span>
												<i className="icon-long-arrow-right" />
											</a>
										</div>
									</div>
								</div>
								<div>
									<div className="intro-slide">
										<figure className="slide-image">
											<picture>
												<img
													src="assets/images/slider/slide-1.jpg"
													alt="Image Desc"
												/>
											</picture>
										</figure>
										<div className="intro-content">
											<h3 className="intro-subtitle">
												Topsale Collection
											</h3>
											{/* End .h3 intro-subtitle */}
											<h1 className="intro-title">
												Living Room
												<br />
												Furniture
											</h1>
											{/* End .intro-title */}
											<a
												href="category.html"
												className="btn btn-outline-white"
											>
												<span>SHOP NOW</span>
												<i className="icon-long-arrow-right" />
											</a>
										</div>
									</div>
								</div>
							</Slider>
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
