import React from "react";
import PropTypes from "prop-types";

ItemProduct.propTypes = {};

function ItemProduct(props) {
	return (
		<div className="product">
			<figure className="product-media">
				<a href="product.html">
					<img
						src="assets/images/demos/demo-20/products/product-6.jpg"
						alt="Product image"
						className="product-image"
					/>
				</a>
			</figure>
			{/* End .product-media */}
			<div className="product-body">
				<div className="product-cat">
					by <a href="#">John Gray</a>
				</div>
				{/* End .product-cat */}
				<h3 className="product-title">
					<a href="product.html">
						The Durrells of Corfu: Exclusive Edition
					</a>
				</h3>
				{/* End .product-title */}
				<div className="product-price">$24.48</div>
				{/* End .product-price */}
				<div className="product-footer">
					<div className="ratings-container">
						<div className="ratings">
							<div className="ratings-val" style={{ width: "100%" }} />
							{/* End .ratings-val */}
						</div>
						{/* End .ratings */}
						<span className="ratings-text">( 10 Reviews )</span>
					</div>
					{/* End .rating-container */}
					<div className="product-action">
						<a href="#" className="btn-product btn-cart">
							<span>add to cart</span>
						</a>
						<a href="#" className="btn-product btn-wishlist">
							<span>Add to Wishlist</span>
						</a>
					</div>
					{/* End .product-action */}
				</div>
				{/* End .product-footer */}
			</div>
			{/* End .product-body */}
		</div>
	);
}

export default ItemProduct;
