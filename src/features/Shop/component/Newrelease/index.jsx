import React from "react";
import PropTypes from "prop-types";
import ItemProduct from "../ProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
Newrelease.propTypes = {};

function Newrelease(props) {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		slidesToScroll: 1,
		centerPadding: "60px",
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};
	var settings2 = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		adaptiveHeight: true,
		slidesToScroll: 3,
		centerPadding: "60px",
		speed: 500,
		autoplaySpeed: 2000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};
	return (
		<div className="container">
			<div className="heading heading-flex">
				<div className="heading-left">
					<h2 className="title">New Releases</h2>
					{/* End .title */}
				</div>

				{/* End .heading-left */}
				<div className="heading-right">
					<a href="category.html" className="title-link">
						View more Products <i className="icon-long-arrow-right" />
					</a>
				</div>
				{/* End .heading-right */}
			</div>
			{/* End .header-flex */}
			<div className="row">
				<div className="col-xl-4 ">
					<Slider {...settings}>
						<div className="product-big">
							<img
								src="assets/images/demos/demo-20/products/product-big-1-bg.jpg"
								alt="product bg img"
							/>
							<div className="product-wrap">
								<figure className="product-media">
									<a href="product.html">
										<img
											src="assets/images/demos/demo-20/products/product-big-1.jpg"
											alt="Product image"
											className="product-image"
										/>
									</a>
								</figure>
								{/* End .product-media */}
								<div className="product-body">
									<div className="product-cat">
										by <a href="#">Becky Albertalli</a> and
										<a href="#">Adam Silvera</a>
									</div>
									{/* End .product-cat */}
									<h3 className="product-title">
										<a href="product.html">
											What If <br />
											It's Us.
										</a>
									</h3>
									{/* End .product-title */}
									<div className="product-price">$18.99</div>
									{/* End .product-price */}
									<div className="product-action">
										<a href="#" className="btn-product btn-cart">
											<span>add to cart</span>
										</a>
									</div>
									{/* End .product-action */}
								</div>
								{/* End .product-body */}
							</div>
							{/* End .product-wrap */}
						</div>
						{/* End .product-big */}
						<div className="product-big">
							<img
								src="assets/images/demos/demo-20/products/product-big-2-bg.jpg"
								alt="product bg img"
							/>
							<div className="product-wrap">
								<figure className="product-media">
									<a href="product.html">
										<img
											src="assets/images/demos/demo-20/products/product-12.jpg"
											alt="Product image"
											className="product-image"
										/>
									</a>
								</figure>
								{/* End .product-media */}
								<div className="product-body">
									<div className="product-cat">
										by <a href="#">Nicola Yoon </a>
									</div>

									{/* End .product-cat */}
									<h3 className="product-title">
										<a href="product.html">The Sun Is Also a Star.</a>
									</h3>
									{/* End .product-title */}
									<div className="product-price">$10.99</div>
									{/* End .product-price */}
									<div className="product-action">
										<a href="#" className="btn-product btn-cart">
											<span>add to cart</span>
										</a>
									</div>
									{/* End .product-action */}
								</div>
								{/* End .product-body */}
							</div>
							{/* End .product-wrap */}
						</div>
						{/* End .product-big */}
					</Slider>

					{/* End .owl-carousel */}
					<div className="mb-3 d-xl-none" />
					{/* End .mb-3 d-none */}
				</div>
				{/* End .col-lg-4 */}

				<div className="col-xl-8 slidercontent">
					<div className="block-wrapper">
						<Slider {...settings2}>
							<ItemProduct></ItemProduct>
							<ItemProduct></ItemProduct>
							<ItemProduct></ItemProduct>
							<ItemProduct></ItemProduct>
						</Slider>
					</div>
					{/* End .block-wrapper */}
				</div>
				{/* End .col-lg-8 */}
			</div>
			{/* End .row */}
		</div>
	);
}

export default Newrelease;
