import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useConfirm } from "material-ui-confirm";

import { Pageview, Delete } from "@material-ui/icons";
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

const useStyles = makeStyles((theme) => ({
	root: {},
	avatar: {
		marginRight: theme.spacing(2),
	},
}));

const Results = ({ className, customers, onRemoveClick, ...rest }) => {
	const classes = useStyles();
	const confirm = useConfirm();
	const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
	const [limit, setLimit] = useState(10);
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

	const handleSelectOne = (event, id) => {
		const selectedIndex = selectedCustomerIds.indexOf(id);
		let newSelectedCustomerIds = [];

		if (selectedIndex === -1) {
			newSelectedCustomerIds = newSelectedCustomerIds.concat(
				selectedCustomerIds,
				id
			);
		} else if (selectedIndex === 0) {
			newSelectedCustomerIds = newSelectedCustomerIds.concat(
				selectedCustomerIds.slice(1)
			);
		} else if (selectedIndex === selectedCustomerIds.length - 1) {
			newSelectedCustomerIds = newSelectedCustomerIds.concat(
				selectedCustomerIds.slice(0, -1)
			);
		} else if (selectedIndex > 0) {
			newSelectedCustomerIds = newSelectedCustomerIds.concat(
				selectedCustomerIds.slice(0, selectedIndex),
				selectedCustomerIds.slice(selectedIndex + 1)
			);
		}

		setSelectedCustomerIds(newSelectedCustomerIds);
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

	const handleEdit = (value) => {
		// const editUrl = `/admin/bill/detail/${value}`;
		// history.push(editUrl);
		return;
	};

	return (
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
							{customers.slice(0, limit).map((customer) => (
								<TableRow
									hover
									key={customer.id}
									selected={
										selectedCustomerIds.indexOf(customer.id) !== -1
									}
								>
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
										{moment(customer.createdAt).format("DD/MM/YYYY")}
									</TableCell>
									<TableCell>
										<IconButton
											onClick={() => handleDelete(customer._id)}
										>
											<Delete style={{ color: "tomato" }}></Delete>
										</IconButton>
										<IconButton
											onClick={() => handleEdit(customer._id)}
										>
											<Pageview style={{ color: "#222" }}></Pageview>
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
		</Card>
	);
};

Results.propTypes = {
	className: PropTypes.string,
	customers: PropTypes.array.isRequired,
};

export default Results;
