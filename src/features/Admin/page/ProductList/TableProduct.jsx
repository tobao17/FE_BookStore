import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useConfirm } from "material-ui-confirm";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
	Avatar,
	Box,
	Card,
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
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {},
	avatar: {
		marginRight: theme.spacing(2),
	},
}));

const Results = ({ className, listbooks, onRemoveClick, ...rest }) => {
	const confirm = useConfirm();
	//console.log(customers);
	console.log("day la list book" + listbooks);
	const classes = useStyles();
	//const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(0);

	const history = useHistory();
	// const handleSelectAll = (event) => {
	// 	let newSelectedCustomerIds;

	// 	if (event.target.checked) {
	// 		newSelectedCustomerIds = listbooks.map((book) => book.id);
	// 	} else {
	// 		newSelectedCustomerIds = [];
	// 	}

	// 	setSelectedCustomerIds(newSelectedCustomerIds);
	// };

	const handleLimitChange = (event) => {
		setLimit(event.target.value);
	};

	const handlePageChange = (event, newPage) => {
		setPage(newPage);
	};

	///handle lai phai dua len tren khong co thoi gian lam luon
	const handleDelete = (value) => {
		confirm({
			title: "Thông Báo",
			description: "Bạn có muốn xóa sản phẩm này?",
		})
			.then(() => {
				onRemoveClick(value);
			})
			.catch(() => {});
	};

	const handleEdit = (value) => {
		const editUrl = `/admin/book/edit/${value}`;
		history.push(editUrl);
	};

	return (
		<Card className={clsx(classes.root, className)} {...rest}>
			<PerfectScrollbar>
				<Box minWidth={1050}>
					<Table>
						<TableHead>
							<TableRow>
								{/* <TableCell>STT</TableCell> */}
								<TableCell>Tên</TableCell>
								<TableCell>Số Lượng</TableCell>
								<TableCell>Thể Loại</TableCell>
								<TableCell>Tác Giả</TableCell>
								<TableCell>Giá</TableCell>
								<TableCell>Thao Tác</TableCell>
							</TableRow>
						</TableHead>
						<TableBody></TableBody>
					</Table>
				</Box>
			</PerfectScrollbar>
			{/* <TablePagination
				component="div"
				count={listbooks.length}
				onChangePage={handlePageChange}
				onChangeRowsPerPage={handleLimitChange}
				page={page}
				rowsPerPage={limit}
				rowsPerPageOptions={[5, 10, 25]}
			/> */}
		</Card>
	);
};

Results.propTypes = {
	onRemoveClick: PropTypes.func,
};

Results.defaultProps = {
	onRemoveClick: null,
};

export default Results;
