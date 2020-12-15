import React, { useEffect, useState } from "react";
import AddFrom from "./AddFrom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import bookApi from "../../../../api/bookApi";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

AddBook.propTypes = {};

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
	},
}));
function AddBook(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const classes = useStyles();
	const { bookId } = useParams();
	const isAddForm = !bookId;

	const [progess, setProgess] = useState(false);
	const [initialValues, setInitialValue] = useState({
		title: "",
		quantity: "",
		author: "",
		description: "",
		images: "",
		price: "",
		categoryId: "",
	});

	useEffect(() => {
		async function fetchData() {
			await bookApi.getOne(bookId).then((res) => {
				//	console.log(res);
				setInitialValue({
					...initialValues,
					title: res.title,
					author: res.author,
					quantity: res.quantity,
					description: res.description,
					images: res.images,
					price: res.price,
					categoryId: res.category._id,
				});
			});
		}
		if (!isAddForm) {
			fetchData();
		}
		//
	}, [isAddForm, bookId, initialValues]);
	function handleSubmit(value) {
		return async (value) => {
			try {
				//	console.log(value);
				const data = new FormData(); // tao form multiple
				data.append("images", value.images);
				data.append("title", value.title);
				data.append("quantity", value.quantity);
				data.append("price", value.price);
				data.append("author", value.author);
				data.append("category", value.categoryId);
				data.append("description", value.description);

				if (isAddForm) {
					//ADD
					setProgess(true);
					await bookApi.create(data).then((res) => {
						//lay duoc du lieu roi .then moi dispatch
						dispatch({ type: "ADD_BOOk", payload: res.data });
						dispatch({
							type: "NOTICE",
							payload: {
								title: "Thông báo",
								msg: "Thêm thành công!",
							},
						});
					});
				} else {
					//Edit

					data.append("_id", bookId);
					setProgess(true);
					await bookApi.update(data).then((res) => {
						//lay duoc du lieu roi .then moi dispatch
						if (res.data) {
							dispatch({ type: "EDIT_BOOK", payload: res.data });
							dispatch({
								type: "NOTICE",
								payload: {
									title: "Thông báo",
									msg: "Cập nhật thành công!",
								},
							});
						}
					});
				}
				setProgess(false);

				history.goBack();

				return;
			} catch (error) {
				console.log(error);
			}
		};
	}

	return (
		<div>
			<AddFrom
				onSubmit={handleSubmit()}
				initialValues={initialValues}
				isAddForm={isAddForm}
			></AddFrom>
			<Backdrop className={classes.backdrop} open={progess}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
}

export default AddBook;
// const listBookEdit = useSelector((state) => {
// 	const bookEdit = state.book.books.find((item) => item.id === bookId);
// 	return bookEdit;
// });
