import React from "react";
import PropTypes from "prop-types";

ProductGroup.propTypes = {};

function ProductGroup(props) {
	return (
		<div className="products mb-3">
			<div className="row justify-content-center">
				{/* End .col-sm-6 col-lg-4 col-xl-3 */}
				<div className="col-6 col-md-4 col-lg-4 col-xl-3">
					<div className="product product-7 text-center">
						<figure className="product-media">
							<a href="product.html">
								<img
									src="assets/images/products/product-10.jpg"
									alt="Product image"
									className="product-image"
								/>
							</a>
							<div className="product-action-vertical">
								<a
									href="#"
									className="btn-product-icon btn-wishlist btn-expandable"
								>
									<span>add to wishlist</span>
								</a>
								<a
									href="popup/quickView.html"
									className="btn-product-icon btn-quickview"
									title="Quick view"
								>
									<span>Quick view</span>
								</a>
								<a
									href="#"
									className="btn-product-icon btn-compare"
									title="Compare"
								>
									<span>Compare</span>
								</a>
							</div>
							{/* End .product-action-vertical */}
							<div className="product-action">
								<a href="#" className="btn-product btn-cart">
									<span>add to cart</span>
								</a>
							</div>
							{/* End .product-action */}
						</figure>
						{/* End .product-media */}
						<div className="product-body">
							<div className="product-cat">
								<a href="#">Jumpers</a>
							</div>
							{/* End .product-cat */}
							<h3 className="product-title">
								<a href="product.html">Yellow button front tea top</a>
							</h3>
							{/* End .product-title */}
							<div className="product-price">$56.00</div>
							{/* End .product-price */}
							<div className="ratings-container">
								<div className="ratings">
									<div
										className="ratings-val"
										style={{ width: "0%" }}
									/>
									{/* End .ratings-val */}
								</div>
								{/* End .ratings */}
								<span className="ratings-text">( 0 Reviews )</span>
							</div>
							{/* End .rating-container */}
						</div>
						{/* End .product-body */}
					</div>
					{/* End .product */}
				</div>
				{/* End .col-sm-6 col-lg-4 col-xl-3 */}{" "}
				<div className="col-6 col-md-4 col-lg-4 col-xl-3">
					<div className="product product-7 text-center">
						<figure className="product-media">
							<a href="product.html">
								<img
									src="assets/images/products/product-10.jpg"
									alt="Product image"
									className="product-image"
								/>
							</a>
							<div className="product-action-vertical">
								<a
									href="#"
									className="btn-product-icon btn-wishlist btn-expandable"
								>
									<span>add to wishlist</span>
								</a>
								<a
									href="popup/quickView.html"
									className="btn-product-icon btn-quickview"
									title="Quick view"
								>
									<span>Quick view</span>
								</a>
								<a
									href="#"
									className="btn-product-icon btn-compare"
									title="Compare"
								>
									<span>Compare</span>
								</a>
							</div>
							{/* End .product-action-vertical */}
							<div className="product-action">
								<a href="#" className="btn-product btn-cart">
									<span>add to cart</span>
								</a>
							</div>
							{/* End .product-action */}
						</figure>
						{/* End .product-media */}
						<div className="product-body">
							<div className="product-cat">
								<a href="#">Jumpers</a>
							</div>
							{/* End .product-cat */}
							<h3 className="product-title">
								<a href="product.html">Yellow button front tea top</a>
							</h3>
							{/* End .product-title */}
							<div className="product-price">$56.00</div>
							{/* End .product-price */}
							<div className="ratings-container">
								<div className="ratings">
									<div
										className="ratings-val"
										style={{ width: "0%" }}
									/>
									{/* End .ratings-val */}
								</div>
								{/* End .ratings */}
								<span className="ratings-text">( 0 Reviews )</span>
							</div>
							{/* End .rating-container */}
						</div>
						{/* End .product-body */}
					</div>
					{/* End .product */}
				</div>
				{/* End .col-sm-6 col-lg-4 col-xl-3 */}
				<div className="col-6 col-md-4 col-lg-4 col-xl-3">
					<div className="product product-7 text-center">
						<figure className="product-media">
							<span className="product-label label-top">Top</span>
							<a href="product.html">
								<img
									src="assets/images/products/product-11.jpg"
									alt="Product image"
									className="product-image"
								/>
							</a>
							<div className="product-action-vertical">
								<a
									href="#"
									className="btn-product-icon btn-wishlist btn-expandable"
								>
									<span>add to wishlist</span>
								</a>
								<a
									href="popup/quickView.html"
									className="btn-product-icon btn-quickview"
									title="Quick view"
								>
									<span>Quick view</span>
								</a>
								<a
									href="#"
									className="btn-product-icon btn-compare"
									title="Compare"
								>
									<span>Compare</span>
								</a>
							</div>
							{/* End .product-action-vertical */}
							<div className="product-action">
								<a href="#" className="btn-product btn-cart">
									<span>add to cart</span>
								</a>
							</div>
							{/* End .product-action */}
						</figure>
						{/* End .product-media */}
						<div className="product-body">
							<div className="product-cat">
								<a href="#">Shoes</a>
							</div>
							{/* End .product-cat */}
							<h3 className="product-title">
								<a href="product.html">
									Light brown studded Wide fit wedges
								</a>
							</h3>
							{/* End .product-title */}
							<div className="product-price">$110.00</div>
							{/* End .product-price */}
							<div className="ratings-container">
								<div className="ratings">
									<div
										className="ratings-val"
										style={{ width: "80%" }}
									/>
									{/* End .ratings-val */}
								</div>
								{/* End .ratings */}
								<span className="ratings-text">( 1 Reviews )</span>
							</div>
							{/* End .rating-container */}
							<div className="product-nav product-nav-thumbs">
								<a href="#" className="active">
									<img
										src="assets/images/products/product-11-thumb.jpg"
										alt="product desc"
									/>
								</a>
								<a href="#">
									<img
										src="assets/images/products/product-11-2-thumb.jpg"
										alt="product desc"
									/>
								</a>
								<a href="#">
									<img
										src="assets/images/products/product-11-3-thumb.jpg"
										alt="product desc"
									/>
								</a>
							</div>
							{/* End .product-nav */}
						</div>
						{/* End .product-body */}
					</div>
					{/* End .product */}
				</div>
				{/* End .col-sm-6 col-lg-4 col-xl-3 */}
				<div className="col-6 col-md-4 col-lg-4 col-xl-3">
					<div className="product product-7 text-center">
						<figure className="product-media">
							<a href="product.html">
								<img
									src="assets/images/products/product-10.jpg"
									alt="Product image"
									className="product-image"
								/>
							</a>
							<div className="product-action-vertical">
								<a
									href="#"
									className="btn-product-icon btn-wishlist btn-expandable"
								>
									<span>add to wishlist</span>
								</a>
								<a
									href="popup/quickView.html"
									className="btn-product-icon btn-quickview"
									title="Quick view"
								>
									<span>Quick view</span>
								</a>
								<a
									href="#"
									className="btn-product-icon btn-compare"
									title="Compare"
								>
									<span>Compare</span>
								</a>
							</div>
							{/* End .product-action-vertical */}
							<div className="product-action">
								<a href="#" className="btn-product btn-cart">
									<span>add to cart</span>
								</a>
							</div>
							{/* End .product-action */}
						</figure>
						{/* End .product-media */}
						<div className="product-body">
							<div className="product-cat">
								<a href="#">Jumpers</a>
							</div>
							{/* End .product-cat */}
							<h3 className="product-title">
								<a href="product.html">Yellow button front tea top</a>
							</h3>
							{/* End .product-title */}
							<div className="product-price">$56.00</div>
							{/* End .product-price */}
							<div className="ratings-container">
								<div className="ratings">
									<div
										className="ratings-val"
										style={{ width: "0%" }}
									/>
									{/* End .ratings-val */}
								</div>
								{/* End .ratings */}
								<span className="ratings-text">( 0 Reviews )</span>
							</div>
							{/* End .rating-container */}
						</div>
						{/* End .product-body */}
					</div>
					{/* End .product */}
				</div>
				{/* End .col-sm-6 col-lg-4 col-xl-3 */}
				<div className="col-6 col-md-4 col-lg-4 col-xl-3">
					<div className="product product-7 text-center">
						<figure className="product-media">
							<a href="product.html">
								<img
									src="assets/images/products/product-12.jpg"
									alt="Product image"
									className="product-image"
								/>
							</a>
							<div className="product-action-vertical">
								<a
									href="#"
									className="btn-product-icon btn-wishlist btn-expandable"
								>
									<span>add to wishlist</span>
								</a>
								<a
									href="popup/quickView.html"
									className="btn-product-icon btn-quickview"
									title="Quick view"
								>
									<span>Quick view</span>
								</a>
								<a
									href="#"
									className="btn-product-icon btn-compare"
									title="Compare"
								>
									<span>Compare</span>
								</a>
							</div>
							{/* End .product-action-vertical */}
							<div className="product-action">
								<a href="#" className="btn-product btn-cart">
									<span>add to cart</span>
								</a>
							</div>
							{/* End .product-action */}
						</figure>
						{/* End .product-media */}
						<div className="product-body">
							<div className="product-cat">
								<a href="#">Bags</a>
							</div>
							{/* End .product-cat */}
							<h3 className="product-title">
								<a href="product.html">
									Black soft RI weekend travel bag
								</a>
							</h3>
							{/* End .product-title */}
							<div className="product-price">$68.00</div>
							{/* End .product-price */}
							<div className="ratings-container">
								<div className="ratings">
									<div
										className="ratings-val"
										style={{ width: "0%" }}
									/>
									{/* End .ratings-val */}
								</div>
								{/* End .ratings */}
								<span className="ratings-text">( 0 Reviews )</span>
							</div>
							{/* End .rating-container */}
						</div>
						{/* End .product-body */}
					</div>
					{/* End .product */}
				</div>
			</div>
			{/* End .row */}
		</div>
	);
}

export default ProductGroup;
