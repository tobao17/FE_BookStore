import React, { useEffect, useState } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import Toolbar from "./ToolBar";
import TableCustomer from "./TableCustomer";
import bookApi from "../../../../api/bookApi";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../../../actions/books";
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		minHeight: "100%",
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3),
	},
}));

const CustomerListView = () => {
	const classes = useStyles();
	const listBook = useSelector((state) => state.book.books);
	const dispatch = useDispatch();
	const [customers, setState] = React.useState([]);
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
					var books = [];
					console.log(response);

					for (let i = 0; i < response.length; i++) {
						const result = {
							id: response[i]._id,
							name: response[i].title,
							description: response[i].description,
							author: response[i].author,
							category: response[i].category.name,
							image: response[i].images,
							price: response[i].price.toString().includes(".")
								? response[i].price + "00đ"
								: response[i].price + ".000đ",
						};
						books.push(result);
					}

					return onSuccess(books);
				} catch (error) {
					console.log(error);
				}
			};
		}

		getData()();
		return () => {};
	});

	const deleteData = async (value) => {
		function onSuccess(data) {
			dispatch({ type: "DELETE_BOOk", payload: data });
			return;
		}

		try {
			const response = await bookApi.delete(value);
			onSuccess(value);
			console.log(value);

			return;
		} catch (error) {
			console.log(error);
		}
	};

	function handleFiltersChanse(newFilter) {
		console.log("new value" + newFilter);
	}
	function handleDelete(value) {
		deleteData(value);
	}

	return (
		<Container maxWidth={false}>
			<Toolbar onSubmit={handleFiltersChanse} />
			<Box mt={3}>
				<TableCustomer onRemoveClick={handleDelete} customers={listBook} />
			</Box>
		</Container>
	);
};
export default CustomerListView;
