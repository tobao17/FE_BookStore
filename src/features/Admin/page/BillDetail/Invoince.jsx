import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ReactToPdf from "react-to-pdf";

import "./index.css";
const ref = React.createRef();
const options = {
	orientation: "landscape",
	unit: "in",
	format: [4, 2],
};
const useStyles = makeStyles((theme) => ({
	layout: {
		width: "auto",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
			width: 800,
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	paper: {
		marginTop: theme.spacing(0),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(0),
		[theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(0),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	center: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		whiteSpace: "nowrap",
		marginBottom: theme.spacing(1),
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
function Invoince(props) {
	const history = useHistory();
	const classes = useStyles();

	const { Billdetail } = props;
	console.log(Billdetail);

	const handleBack = () => {
		history.push("/admin/bill");
		return;
	};

	const handleEdit = async () => {
		return;
	};

	return (
		<>
			<div className={classes.paper} className={classes.layout}>
				{Billdetail && (
					<div ref={ref} style={{ padding: "3px" }} options={options}>
						<Grid container spacing={3}>
							<Grid item xs={9}>
								<div className="">
									<h2 className="client-company-name">
										UTE bookstore.
									</h2>
									<h6 className="client-address">
										01 Võ Văn Ngân <br />
										+84, TP.Thủ Đức <br />
										việt Nam
									</h6>
									<h4>Lĩnh vực</h4>
									<h5>
										Chuyên cung cấp các loại sách & văn phòng phẩm cho
										<br />
										Người Việt
									</h5>
								</div>
							</Grid>
							<Grid item xs={3}>
								<div className="">
									<h2 className="our-company-name">
										{Billdetail.userName}
									</h2>
									<h6 className="our-address">
										{Billdetail.Order.address}, <br />
										Việt Nam
									</h6>
									<div className="logo-wrapper"></div>
									<h5>
										{moment(Billdetail.updatedAt).format(
											"DD/MM/YYYY"
										)}
									</h5>
								</div>
							</Grid>
						</Grid>

						<Grid container spacing={1}>
							<Grid container xs={12} spacing={1}>
								<Grid item xs={3}>
									<div>
										<h5>Hóa Đơn No.</h5>
										<h4>{Billdetail._id.slice(18).toUpperCase()}</h4>
									</div>
								</Grid>
								<Grid item xs={9}>
									<TableContainer>
										<Table
											className={classes.table}
											aria-label="simple table"
										>
											<TableHead>
												<TableRow>
													<TableCell>Tên sản phẩm</TableCell>
													<TableCell>Giá</TableCell>
													<TableCell align="left">
														số lượng
													</TableCell>
													<TableCell align="left">
														Tổng tiền
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{Billdetail.products.map((item) => (
													<TableRow>
														<TableCell align="left">
															{item.book.title}
														</TableCell>
														<TableCell align="left">
															{item.book.price}
														</TableCell>
														<TableCell align="left">
															{item.quantity}
														</TableCell>

														<TableCell align="left">
															{item.totalPrice}
														</TableCell>
													</TableRow>
												))}

												<TableRow>
													<TableCell colSpan={3}>
														Tổng Tiền
													</TableCell>

													<TableCell align="right">
														{Billdetail.totalPrice}
													</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>

							<Grid container xs={12} spacing={1}>
								<Grid item xs={4}>
									<h6 className={classes.center}>bookStore.com</h6>
								</Grid>
								<Grid item xs={4}>
									<h6 className={classes.center}>
										uteboookStroe@gmail.com
									</h6>
								</Grid>
								<Grid item xs={4}>
									<h6 className={classes.center}>+84 8097678988</h6>
								</Grid>
							</Grid>

							<Grid container xs={12} spacing={0}>
								<Grid item xs={12}>
									<div className="bottom-bar" />
								</Grid>
							</Grid>
						</Grid>
					</div>
				)}
			</div>
			<div className={classes.buttons}>
				<Button onClick={handleBack} className={classes.button}>
					Trở về
				</Button>
				<ReactToPdf targetRef={ref} filename="utebook.pdf">
					{({ toPdf }) => (
						<Button
							variant="contained"
							color="primary"
							type="submit"
							className={classes.button}
							onClick={handleEdit}
							onClick={toPdf}
						>
							In PDF
						</Button>
					)}
				</ReactToPdf>
			</div>
		</>
	);
}

export default Invoince;
