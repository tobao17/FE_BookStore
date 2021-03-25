import React from "react";
import PropTypes from "prop-types";
import ItemProduct from "../ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
Hotbooks.propTypes = {};

function Hotbooks(props) {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 5,
		adaptiveHeight: true,
		slidesToScroll: 5,
		centerPadding: "60px",
		speed: 500,
		autoplaySpeed: 2000,
		cssEase: "linear",
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
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
		],
	};
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
					<Slider {...settings}>
						{[1, 2, 3, 4, 5, 6].map((item) => (
							<ItemProduct></ItemProduct>
						))}{" "}
					</Slider>

					{/* End .owl-carousel */}
				</div>
				{/* End .container */}
			</div>
			{/* End .block-wrapper */}
		</div>
	);
}

export default Hotbooks;
