import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useConfirm } from "material-ui-confirm";
import { Modal } from "@material-ui/core";
import { Pageview, Delete } from "@material-ui/icons";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Container from "@material-ui/core/Container";
import {
	Avatar,
	Box,
	Card,
	Checkbox,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TablePagination,
	TableRow,
	Typography,
	makeStyles,
	IconButton,
} from "@material-ui/core";
// import getInitials from 'src/utils/getInitials';
import "./index.css";
const useStyles = makeStyles((theme) => ({
	root: {},
	avatar: {
		marginRight: theme.spacing(2),
	},
	paper: {
		position: "absolute",
		width: 800,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));
function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const Results = ({ className, customers, onRemoveClick, ...rest }) => {
	const classes = useStyles();
	const confirm = useConfirm();
	const [userItem, setUserItem] = useState({});
	const [openModal, setOpenModal] = React.useState(false);
	const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
	const [limit, setLimit] = useState(10);
	const [modalStyle] = React.useState(getModalStyle);
	const [page, setPage] = useState(0);

	const handleSelectAll = (event) => {
		let newSelectedCustomerIds;

		if (event.target.checked) {
			newSelectedCustomerIds = customers.map((customer) => customer.id);
		} else {
			newSelectedCustomerIds = [];
		}

		setSelectedCustomerIds(newSelectedCustomerIds);
	};
	const handleCloseModal = () => {
		setOpenModal(false);
	};
	const handleOpenModal = (value) => {
		setUserItem(value);
		setOpenModal(true);
	};
	const handleLimitChange = (event) => {
		setLimit(event.target.value);
	};

	const handlePageChange = (event, newPage) => {
		setPage(newPage);
	};
	const handleDelete = (value) => {
		confirm({
			title: "Thông Báo",
			description: "Bạn có muốn ban tài khoản này?",
		})
			.then(() => {
				onRemoveClick(value);
			})

			.catch(() => {});
		return;
	};
	const body = (customer) => (
		<div style={modalStyle} className={classes.paper}>
			<CssBaseline />

			<Avatar className={classes.avatar}></Avatar>
			<br></br>

			<form className={classes.form} noValidate>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							autoComplete="fname"
							name="firstName"
							variant="outlined"
							required
							fullWidth
							id="firstName"
							label="Name"
							autoFocus
							value={customer.username}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="lastName"
							label="Email"
							name="lastName"
							autoComplete="lname"
							value={customer.email}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							autoComplete="fname"
							name="firstName"
							variant="outlined"
							required
							fullWidth
							value={customer.address ? customer.address : ""}
							id="address"
							label="First Name"
							autoFocus
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="lastName"
							label="Phone"
							name=""
							value={customer.phone}
							autoComplete="lname"
						/>
					</Grid>
					<Grid item xs={12}></Grid>
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					onClick={handleCloseModal}
					className="MuiButton-fullWidthUser"
				>
					OK
				</Button>
			</form>
		</div>
	);

	return (
		<div>
			<Card className={clsx(classes.root, className)} {...rest}>
				<PerfectScrollbar>
					<Box minWidth={1050}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Tên</TableCell>
									<TableCell>Email</TableCell>
									<TableCell>Địa Điểm</TableCell>
									<TableCell>Điện Thoại</TableCell>
									<TableCell>Ngày đăng kí</TableCell>
									<TableCell>Thao Tác</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{customers.map((customer) => (
									<TableRow hover key={customer._id}>
										<TableCell>
											<Box alignItems="center" display="flex">
												<Avatar
													className={classes.avatar}
													src={customer.avatarUrl}
												></Avatar>
												<Typography
													color="textPrimary"
													variant="body1"
												>
													{customer.username}
												</Typography>
											</Box>
										</TableCell>
										<TableCell>{customer.email}</TableCell>
										<TableCell>{`${
											customer.address ? customer.address : ""
										}`}</TableCell>
										<TableCell>{customer.phone}</TableCell>
										<TableCell>
											{moment(customer.createdAt).format(
												"DD/MM/YYYY"
											)}
										</TableCell>
										<TableCell>
											<IconButton
												onClick={() => handleDelete(customer._id)}
											>
												<Delete
													style={{ color: "tomato" }}
												></Delete>
											</IconButton>
											<IconButton
												onClick={() => handleOpenModal(customer)}
											>
												<Pageview
													style={{ color: "#222" }}
												></Pageview>
											</IconButton>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Box>
				</PerfectScrollbar>

				<TablePagination
					component="div"
					count={customers.length}
					onChangePage={handlePageChange}
					onChangeRowsPerPage={handleLimitChange}
					page={page}
					rowsPerPage={limit}
					rowsPerPageOptions={[5, 10, 25]}
				/>
				<Modal
					open={openModal}
					onClose={handleCloseModal}
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
				>
					<div>{body(userItem)}</div>
				</Modal>
			</Card>
		</div>
	);
};

Results.propTypes = {
	className: PropTypes.string,
	customers: PropTypes.array.isRequired,
};

export default Results;
