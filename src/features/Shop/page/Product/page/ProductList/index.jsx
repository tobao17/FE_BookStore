import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import bookApi from "../../../../../../api/bookApi";
import { useDispatch, useSelector } from "react-redux";
import ItemProduct from "../../../../component/ProductItem";
import Filter from "../../../../component/Filter";
import Pagenavigation from "../../../../component/Pagenavigation";
import "./index.css";
import ProductGroup from "../../../../component/ProductGroup";
import FilterItemSort from "../../../../component/FilterItemSort";
import Breadcrumb from "../../../../component/Breadcrumb";
import ProductSkeleton from "../../../../component/SkeletonList/ProductSkeleton";

ProductList.propTypes = {};

function ProductList(props) {
	const dispatch = useDispatch();
	const [books, setListBook] = useState({});
	const [filter, setFilter] = useState({});
	const [booksPagination, setBooksPagination] = useState([]);
	const [loading, setLoading] = useState(true);
	const location = useLocation();

	let searchWord = location.search.slice(6);
	console.log(location.search.slice(6));

	useEffect(() => {
		if (searchWord) {
			setLoading(true);
			(async () => {
				try {
					let keyword = { keyword: searchWord };
					const { data } = await bookApi.search(keyword);
					console.log(data);
					await setListBook({ ...books, books: data });
				} catch (error) {
					console.log(error);
				}

				setLoading(false);
			})();
		} else {
			(async () => {
				try {
					const { data } = await bookApi.getAll({});
					await setListBook(data);
				} catch (error) {
					console.log(error);
				}

				setLoading(false);
			})();
		}
	}, [searchWord]);
	useEffect(() => {
		if (books.books) {
			handlePagination(1);
		}
	}, [books.books, searchWord]);

	const handleAddtocart = (value) => {
		value = { quantityCart: 1, ...value };
		dispatch({ type: "ADD_TO_CART", payload: value });
	};
	const handleAddtoWishList = (value) => {
		dispatch({ type: "ADD_TO_WISHLIST", payload: value });
	};
	const handlePagination = (page) => {
		const limit = 8;
		let listbook = books.books;
		let endPage = Math.ceil(books.books.length / 8);

		console.log(page, endPage);
		let from = (page - 1) * limit;
		let toindex = page * limit;
		if (page == endPage) {
			let bookPagination = listbook
				.reverse()
				.slice(from, books.books.length);
			console.log(booksPagination);
			setBooksPagination(bookPagination);
			return bookPagination;
		}
		let bookPagination = listbook.reverse().slice(from, toindex);
		setBooksPagination(bookPagination);
		return bookPagination;
	};
	const getDataByFilterChange = () => {
		setLoading(true);
		(async () => {
			try {
				let dataBook = { ...books };
				let bookByCategory;
				let bookByPrice;
				const { priceRange, category } = filter;
				if (category) {
					const { data } = await bookApi.filterBycategory(category);

					bookByCategory = data.data;

					//dataBook.books = data.data;
					//setListBook(dataBook);
				}
				if (priceRange) {
					const { data } = await bookApi.filterByPriceRange(priceRange);

					bookByPrice = data.data;
					//setListBook(dataBook);
				}

				if (category && priceRange) {
					console.log(bookByPrice);
					console.log(bookByCategory);
					dataBook.books = [];
					bookByPrice.forEach((item) => {
						bookByCategory.forEach((x) => {
							if (x._id == item._id) {
								dataBook.books.push(x);
							}
						});
					});

					console.log(dataBook.books);
					setListBook(dataBook);
				} else {
					if (category) {
						dataBook.books = bookByCategory;
					} else {
						dataBook.books = bookByPrice;
					}
					setListBook(dataBook);
				}

				//await setListBook(data);
			} catch (error) {
				console.log(error);
			}

			setLoading(false);
		})();
	};
	const handleFilterChange = (newfilter) => {
		setFilter({
			...newfilter,
		});
		console.log(newfilter);
	};

	return (
		<>
			<Breadcrumb></Breadcrumb>
			<div className="page-content">
				<div className="container container_Product">
					<div className="row">
						<div className="col-lg-9">
							<div className="toolbox">
								<div className="toolbox-left">
									{books.books && (
										<div className="toolbox-info">
											Showing{" "}
											{books.books.length > 7 ? (
												<span>8 of {books.books.length} </span>
											) : (
												<span>
													{books.books.length} of{" "}
													{books.books.length}
												</span>
											)}{" "}
											Products
										</div>
									)}
								</div>

								<FilterItemSort></FilterItemSort>
							</div>
							{loading ? (
								<ProductSkeleton></ProductSkeleton>
							) : (
								<ProductGroup
									addToWishList={handleAddtoWishList}
									addTocart={handleAddtocart}
									data={booksPagination}
								></ProductGroup>
							)}

							{books.books && (
								<div className="mx-auto">
									<Pagenavigation
										count={Math.ceil(books.books.length / 8)}
										Pagination={handlePagination}
									></Pagenavigation>
								</div>
							)}
						</div>

						<Filter
							oldfilter={filter}
							onchange={handleFilterChange}
							onclick={getDataByFilterChange}
						></Filter>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductList;
