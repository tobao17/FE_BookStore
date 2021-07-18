import React, { useEffect, useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useConfirm } from "material-ui-confirm";
import PerfectScrollbar from "react-perfect-scrollbar";
import Pagenavigation from "../../../../components/Pagination";
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
	const [booksPagination, setBooksPagination] = useState([]);
	const confirm = useConfirm();
	//console.log(customers);
	const classes = useStyles();
	//const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(0);

	const history = useHistory();
	useEffect(() => {
		if (listbooks) {
			handlePagination(1);
		}
	}, [listbooks]);
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
	const handlePagination = (page) => {
		const limit = 15;
		let listbook = listbooks;
		let endPage = Math.ceil(listbooks.length / 8);

		console.log(page, endPage);
		let from = (page - 1) * limit;
		let toindex = page * limit;
		if (page == endPage) {
			let bookPagination = listbook.reverse().slice(from, listbooks.length);
			setBooksPagination(bookPagination);
			return bookPagination;
		}
		let bookPagination = listbook.reverse().slice(from, toindex);
		setBooksPagination(bookPagination);
		return bookPagination;
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
						<TableBody>
							{booksPagination.map((book, index) => (
								<TableRow
									hover
									key={book._id}
									// selected={
									// 	selectedCustomerIds.indexOf(book._id) !== -1
									// }
								>
									{/* <TableCell>{index + 1}</TableCell> */}
									<TableCell>
										<Box alignItems="center" display="flex">
											<Avatar
												className={classes.avatar}
												src={book.images}
											>
												{book.images}
											</Avatar>
											<Typography
												color="textPrimary"
												variant="body1"
											>
												{book.title}
											</Typography>
										</Box>
									</TableCell>
									<TableCell>{book.quantity}</TableCell>
									<TableCell>{book.category.name}</TableCell>

									<TableCell>{book.author}</TableCell>
									<TableCell>{book.price}</TableCell>
									<TableCell>
										<IconButton onClick={() => handleEdit(book._id)}>
											<Edit style={{ color: "#222" }}></Edit>
										</IconButton>
										<IconButton
											onClick={() => handleDelete(book._id)}
										>
											<Delete style={{ color: "tomato" }}></Delete>
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Box>
			</PerfectScrollbar>
			<Pagenavigation
				count={Math.ceil(listbooks.length / 15)}
				Pagination={handlePagination}
			></Pagenavigation>
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
