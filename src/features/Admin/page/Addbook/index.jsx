import React, { useEffect, useState } from "react";
//import io from "socket.io-client";
import AddFrom from "./AddFrom";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import bookApi from "../../../../api/bookApi";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

// import casual from "casual-browserify";
// const ENDPOINT = process.env.ENDPOINT;
// let socket;

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
	// useEffect(() => {
	// 	console.log(process.env.ENDPOINT);
	// 	console.log(process.env);
	// 	//socket = io(ENDPOINT);
	// 	// socket.on("ccc", (data) => {
	// 	// 	console.log(data);
	// 	// });
	// }, []);

	useEffect(() => {
		// socket.on("server send", (data) => {
		// 	console.log(data);
		// });
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
	}, []);
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
					await bookApi
						.create(data)
						.then((res) => {
							//lay duoc du lieu roi .then moi dispatch
							console.log(res);

							if (res.data) {
								//	socket.emit("adminSend:", casual.uuid);
								dispatch({ type: "ADD_BOOk", payload: res.data });
								dispatch({
									type: "NOTICE",
									payload: {
										title: "Thông báo",
										msg: "Thêm thành công!",
									},
								});
							}
							history.goBack();
						})
						.catch((err) => {
							if (err) {
								dispatch({
									type: "NOTICE",
									payload: {
										title: "Thông báo",
										msg: " Phiên đăng nhập của bạn đã hết hạn",
									},
								});

								localStorage.setItem("token", null);
								localStorage.setItem("username", null);
								history.push("/sign-in");
							}
							//return;
						});
					setProgess(false);
				} else {
					//Edit

					data.append("_id", bookId);
					setProgess(true);
					await bookApi
						.update(data)
						.then((res) => {
							//lay duoc du lieu roi .then moi dispatch
							if (res.data) {
								//	socket.emit("adminSend:", casual.uuid);
								dispatch({ type: "EDIT_BOOK", payload: res.data });
								dispatch({
									type: "NOTICE",
									payload: {
										title: "Thông báo",
										msg: "Cập nhật thành công!",
									},
								});
								history.goBack();
							}
						})
						.catch((err) => {
							if (err) {
								dispatch({
									type: "NOTICE",
									payload: {
										title: "Thông báo",
										msg: " Phiên đăng nhập của bạn đã hết hạn",
									},
								});

								localStorage.setItem("token", null);
								localStorage.setItem("username", null);
								history.push("/sign-in");
							}
							//return;
						});
					setProgess(false);
				}
				//

				return;
			} catch (error) {
				console.log(error);
			}
		};
	}
	// const sendMessage = () => {
	// 	console.log("baobao");
	// 	socket.emit("cc", "day la cc");
	// };
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
			{/* <button onClick={sendMessage}> click tao </button> */}
		</div>
	);
}

export default AddBook;
// const listBookEdit = useSelector((state) => {
// 	const bookEdit = state.book.books.find((item) => item.id === bookId);
// 	return bookEdit;
// });
