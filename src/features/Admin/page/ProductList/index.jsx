import React, { useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";
import Toolbar from "../../../../components/ToolBar/index";
import TableProduct from "./TableProduct";
import bookApi from "../../../../api/bookApi";
import { useDispatch, useSelector } from "react-redux";
import "react-notifications/lib/notifications.css";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";

const BookListView = () => {
	const listBook = useSelector((state) => state.book.books);
	const isNotice = useSelector((state) => state.notice.msg);

	//console.log("day la list book" + listBook.length);
	const dispatch = useDispatch();
	useEffect(() => {
		//	lưu data

		function getData() {
			return async () => {
				function onSuccess(success) {
					dispatch({ type: "GET_BOOKS", payload: success });
					return success;
				}
				try {
					const response = await bookApi.getAll({});
					const booksData = response.books;

					return onSuccess(booksData);
				} catch (error) {
					console.log(error);
					return;
				}
			};
		}
		//	console.log(listBook.length);
		if (listBook.length < 2) {
			//0 khi chua co du   //1 khi them hay edit--> reload truoc khi them --> mat du lieu
			getData()();
		}
		if (isNotice.length !== 0) {
			const { titlle, msg } = isNotice[0];
			NotificationManager.success(msg, titlle, 1000);
			dispatch({
				type: "NOTICE",
				payload: {},
			});
			// tra ve null
		}
		console.log("đây là useeffect ");
		// eslint-disable-next-line
		return () => {};
	}, []);

	///delete

	const deleteData = async (value) => {
		console.log(value);
		try {
			await bookApi.delete(value).then((res) => {
				dispatch({ type: "DELETE_BOOk", payload: value });

				NotificationManager.warning("", "Xóa Thành Công", 1000);
			});
			return;
		} catch (error) {
			console.log(error);
		}
	};
	function handleDelete(value) {
		deleteData(value);
	}

	//search

	const FiltersData = async (keyword) => {
		try {
			console.log(keyword);
			await bookApi.search(keyword).then((res) => {
				dispatch({ type: "SEARCH_BOOk", payload: res });
			});
		} catch (error) {}
	};

	function handleFiltersChanse(keyword) {
		FiltersData(keyword);

		//	console.log(keyword);
	}

	return (
		<Container maxWidth={false}>
			<NotificationContainer />
			<Toolbar onSubmit={handleFiltersChanse} />
			<Box mt={3}>
				<TableProduct onRemoveClick={handleDelete} listbooks={listBook} />
			</Box>
		</Container>
	);
};
export default BookListView;

//custom view list product ---> loai
// var books = [];
// for (let i = 0; i < booksData.length; i++) {
// 	const result = {
// 		id: booksData[i]._id,
// 		title: booksData[i].title,
// 		description: booksData[i].description,
// 		author: booksData[i].author,
// 		category: booksData[i].category.name,
// 		categoryId: booksData[i].category._id,
// 		images: booksData[i].images,
// 		price: booksData[i].price,
// 		quantity: booksData[i].quantity,
// 		// .toString().includes(".")
// 		// 	? booksData[i].price + "00đ"
// 		// 	: booksData[i].price + ".000đ",
// 	};
// 	books.push(result);
// }
