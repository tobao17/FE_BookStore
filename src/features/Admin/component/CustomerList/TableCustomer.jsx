import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
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
//import getInitials from "src/utils/getInitials";
import { Edit, Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {},
	avatar: {
		marginRight: theme.spacing(2),
	},
}));

const Results = ({ className, customers, ...rest }) => {
	//console.log(customers);
	const classes = useStyles();
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

	const handleLimitChange = (event) => {
		setLimit(event.target.value);
	};

	const handlePageChange = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<Card className={clsx(classes.root, className)} {...rest}>
			<PerfectScrollbar>
				<Box minWidth={1050}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>STT</TableCell>
								<TableCell>Tên</TableCell>
								<TableCell>Thể Loại</TableCell>
								<TableCell>Tác giả</TableCell>
								<TableCell>Giá</TableCell>
								<TableCell>Thao Tác</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{customers.slice(0, limit).map((customer, index) => (
								<TableRow
									hover
									key={customer.id}
									selected={
										selectedCustomerIds.indexOf(customer.id) !== -1
									}
								>
									<TableCell>{index + 1}</TableCell>
									<TableCell>
										<Box alignItems="center" display="flex">
											<Avatar
												className={classes.avatar}
												src={customer.image}
											>
												{customer.image}
											</Avatar>
											<Typography
												color="textPrimary"
												variant="body1"
											>
												{customer.name}
											</Typography>
										</Box>
									</TableCell>
									<TableCell>{customer.category}</TableCell>
									<TableCell>{customer.author}</TableCell>

									<TableCell>{customer.price}</TableCell>
									<TableCell>
										<IconButton>
											<Edit style={{ color: "#222" }}></Edit>
										</IconButton>
										<IconButton>
											<Delete style={{ color: "tomato" }}></Delete>
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
