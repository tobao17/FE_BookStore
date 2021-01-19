import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ListItemText, ListItemAvatar, Avatar } from "@material-ui/core";
import { SELECTTYPEORDER } from "../../../../constants/global";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useHistory, useParams } from "react-router-dom";
import OrderApi from "../../../../api/orderApi";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
	},
	layout: {
		width: "auto",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Checkout() {
	const dispatch = useDispatch();
	const history = useHistory();
	const classes = useStyles();
	const { orderId } = useParams();
	const [progess, setProgess] = useState(false);
	const [selectOption, setselectOption] = useState([]);
	const [detailOrder, setDetailOrder] = useState({
		userName: "",
		address: "",
		note: "",
		phone: "",
		products: [],
		description: "",
		price: "",
		status: 0,
		totalrice: "",
	});

	const [status, setStatus] = useState(0);
	useEffect(() => {
		//	console.log(detailOrder.status);

		let option = [];

		if (status === 0) {
			option = SELECTTYPEORDER.map((item) => {
				if (item.id !== 2) item.isSelect = true;
				else item.isSelect = false;
				return item;
			});
			//	console.log(option);
		}
		if (status === 1) {
			option = SELECTTYPEORDER.map((item) => {
				console.log(item);
				if (item.id != 0) {
					console.log(item.id);
					item.isSelect = true;
				} else item.isSelect = false;
				return item;
			});
			//	console.log(option);
		}
		if (status === 2) {
			option = SELECTTYPEORDER.map((item) => {
				if (item.id == 2 || item.id == 3) item.isSelect = true;
				else item.isSelect = false;
				return item;
			});
			console.log(option);
		}
		if (status === 3) {
			option = SELECTTYPEORDER.map((item) => {
				if (item.id === 3) {
					item.isSelect = true;
				} else item.isSelect = false;
				return item;
			});
			//	console.log(option);
		}

		setselectOption(option);

		// console.log(option)

		//console.log(selectOption);
	}, [status]);

	useEffect(() => {
		try {
			async function fetchData() {
				await OrderApi.getOne(orderId).then((res) => {
					//	console.log(res);
					if (res.data) {
						setStatus(res.data.status);

						let product = res.data.products;
						let totalprice = 0;
						for (let index = 0; index < product.length; index++) {
							totalprice = product[index].totalPrice + totalprice;
						}

						setDetailOrder({
							...detailOrder,
							_id: res.data._id,
							id: res.data._id.slice(20).toUpperCase(),
							userName: res.data.user.username,
							address: res.data.address,
							products: res.data.products,
							note: res.data.note,
							email: res.data.user.email,
							status: res.data.status,
							totalPrice: totalprice,
							phone: res.data.phone,
						});
					}
				});
			}

			if (detailOrder.userName === "") fetchData();
		} catch (error) {
			console.log(error);
		}
	}, [detailOrder]);

	const getValue = (e) => {
		setDetailOrder({
			...detailOrder,
			status: e.target.value,
		});
	};
	const handleBack = () => {
		history.push("/admin/order");
		return;
	};

	const handleEdit = async () => {
		const data = {
			OrderId: detailOrder._id,
			status: detailOrder.status,
			userName: detailOrder.userName,
			products: detailOrder.products,
			totalPrice: detailOrder.totalPrice,
			preStatus: status,
		};
		setProgess(true);
		await OrderApi.update(data).then((res) => {
			dispatch({ type: "UPDATE_ORDERS", payload: res.data });

			if (data.status == 1) {
				dispatch({ type: "GET_BOOKS", payload: [] }); //tam thoi cho chay lai--> fix tren reducer sau
			}
			if (data.status == 3 && status == 1) {
				dispatch({ type: "GET_BOOKS", payload: [] }); //tam thoi cho chay lai--> fix tren reducer sau
			}
			dispatch({
				type: "NOTICE",
				payload: {
					title: "Thông báo",
					msg: "Cập nhật thành công!",
				},
			});
		});
		setProgess(false);
		history.push("/admin/order");
		return;
	};

	const handleOnclick = (e) => {
		console.log(e);
	};
	return (
		<>
			<React.Fragment>
				<CssBaseline />

				<main className={classes.layout}>
					<Paper className={classes.paper}>
						<React.Fragment>
							<Typography variant="h6" gutterBottom>
								Order detail
							</Typography>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={6}>
									<TextField
										//	disabled={true}
										id="firstName"
										name="firstName"
										label="name"
										fullWidth
										value={detailOrder.userName}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="lastName"
										name="lastName"
										label="Số điện thoại"
										fullWidth
										autoComplete="family-name"
										value={detailOrder.phone}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="zip"
										name="zip"
										label="Zip / Postal code"
										fullWidth
										value={`` + detailOrder.id}
										//value={"tinh91291@gmail.com"}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										id="zip"
										name="zip"
										label="Email"
										fullWidth
										autoComplete="family-name"
										value={`` + detailOrder.email}
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										id="address1"
										label="Địa chỉ"
										fullWidth
										autoComplete="family-name"
										value={detailOrder.address}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										id="address2"
										name="address2"
										label="Lời nhắn"
										fullWidth
										autoComplete="family-name"
										value={detailOrder.note}
									/>
								</Grid>

								<Grid item xs={12}></Grid>
							</Grid>
						</React.Fragment>

						<React.Fragment>
							<Typography variant="h6" gutterBottom>
								Chi Tiết
							</Typography>
							<List disablePadding>
								{detailOrder.products.map((product) => (
									<ListItem
										className={classes.listItem}
										key={product.book._id}
									>
										<ListItemAvatar>
											<Avatar
												alt="UTE shop"
												src={product.book.images}
											/>
										</ListItemAvatar>
										<ListItemText
											primary={
												product.book.title +
												`   x` +
												product.quantity
											}
											secondary={product.book.price + `.000VND`}
										/>

										<Typography variant="body2">
											{product.totalPrice + `.000VND`}
										</Typography>
									</ListItem>
								))}
								<ListItem className={classes.listItem}>
									<ListItemText primary="Total" />
									<Typography
										variant="subtitle1"
										className={classes.total}
									>
										{detailOrder.totalPrice + `.000VND`}
									</Typography>
								</ListItem>
							</List>

							<hr></hr>
							<br></br>
							<Grid item xs={12} sm={6}>
								<Select
									fullWidth
									value={detailOrder.status}
									onChange={getValue}
									select
								>
									{selectOption.length > 0 &&
										selectOption.map((item) =>
											item.isSelect === true ? (
												<MenuItem
													onClick={handleOnclick}
													value={item.id}
												>
													{item.name}
												</MenuItem>
											) : (
												<MenuItem
													onClick={handleOnclick}
													value={item.id}
													disabled={true}
												>
													{item.name}
												</MenuItem>
											)
										)}
								</Select>
							</Grid>
						</React.Fragment>
						<div className={classes.buttons}>
							<Button onClick={handleBack} className={classes.button}>
								Trở về
							</Button>

							<Button
								variant="contained"
								color="primary"
								type="submit"
								className={classes.button}
								onClick={handleEdit}
							>
								Cập Nhật
							</Button>
						</div>
					</Paper>
				</main>
			</React.Fragment>
			{/* <Backdrop className={classes.backdrop} open={progess}>
				<CircularProgress color="inherit" />
			</Backdrop> */}
		</>
	);
}
