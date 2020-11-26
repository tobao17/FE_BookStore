import React from "react";
import PropTypes from "prop-types";
import AddFrom from "./AddFrom";
import bookApi from "../../../../api/bookApi";
import Axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
AddBook.propTypes = {};

function AddBook(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	function handleSubmit(value) {
		return async (value) => {
			function onSuccess(data) {
				dispatch({ type: "ADD_BOOK", payload: data });
				return;
			}

			try {
				const data = new FormData();
				data.append("images", value.images);
				data.append("title", value.title);
				data.append("quantity", value.quantity);
				data.append("price", value.price);
				data.append("author", value.author);
				data.append("category", value.category);
				data.append("description", value.description);

				const response = await bookApi.create(data);
				onSuccess(response);
				console.log(response);
				history.goBack();

				return;
			} catch (error) {
				console.log(error);
			}
		};
	}

	return (
		<div>
			<AddFrom onSubmit={handleSubmit()}></AddFrom>
		</div>
	);
}

export default AddBook;
