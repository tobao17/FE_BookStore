import React from "react";
import PropTypes from "prop-types";

CartItem.propTypes = {};

function CartItem(props) {
	return (
		<div className="header-dropdown-link">
			<div className="account">
				<a href="dashboard.html" title="My account">
					<div className="icon">
						<i className="icon-user" />
					</div>
					<p>Account</p>
				</a>
			</div>
			{/* End .compare-dropdown */}
			<div className="wishlist">
				<a href="wishlist.html" title="Wishlist">
					<div className="icon">
						<i className="icon-heart-o" />
						<span className="wishlist-count badge">3</span>
					</div>
					<p>Wishlist</p>
				</a>
			</div>
			{/* End .compare-dropdown */}
			<div className="dropdown cart-dropdown">
				<a
					href="#"
					className="dropdown-toggle"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					data-display="static"
				>
					<div className="icon">
						<i className="icon-shopping-cart" />
						<span className="cart-count">3</span>
					</div>
					<p>Cart</p>
				</a>
				<div className="dropdown-menu dropdown-menu-right">
					<div className="dropdown-cart-products">
						<div className="product">
							<div className="product-cart-details">
								<h4 className="product-title">
									<a href="product.html">
										Beige knitted elastic runner shoes
									</a>
								</h4>
								<span className="cart-product-info">
									<span className="cart-product-qty">1</span>x $84.00
								</span>
							</div>
							{/* End .product-cart-details */}
							<figure className="product-image-container">
								<a href="product.html" className="product-image">
									<img
										src="assets/images/products/cart/product-1.jpg"
										alt="product"
									/>
								</a>
							</figure>
							<a href="#" className="btn-remove" title="Remove Product">
								<i className="icon-close" />
							</a>
						</div>
						{/* End .product */}
						<div className="product">
							<div className="product-cart-details">
								<h4 className="product-title">
									<a href="product.html">
										Blue utility pinafore denim dress
									</a>
								</h4>
								<span className="cart-product-info">
									<span className="cart-product-qty">1</span>x $76.00
								</span>
							</div>
							{/* End .product-cart-details */}
							<figure className="product-image-container">
								<a href="product.html" className="product-image">
									<img
										src="assets/images/products/cart/product-2.jpg"
										alt="product"
									/>
								</a>
							</figure>
							<a href="#" className="btn-remove" title="Remove Product">
								<i className="icon-close" />
							</a>
						</div>
						{/* End .product */}
					</div>
					{/* End .cart-product */}
					<div className="dropdown-cart-total">
						<span>Total</span>
						<span className="cart-total-price">$160.00</span>
					</div>
					{/* End .dropdown-cart-total */}
					<div className="dropdown-cart-action">
						<a href="cart.html" className="btn btn-primary">
							View Cart
						</a>
						<a href="checkout.html" className="btn btn-outline-primary-2">
							<span>Checkout</span>
							<i className="icon-long-arrow-right" />
						</a>
					</div>
					{/* End .dropdown-cart-total */}
				</div>
				{/* End .dropdown-menu */}
			</div>
			{/* End .cart-dropdown */}
		</div>
	);
}

export default CartItem;
