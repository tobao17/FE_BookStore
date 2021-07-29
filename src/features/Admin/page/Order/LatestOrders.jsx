import React, { useState, useEffect } from "react";
import clsx from "clsx";
import moment from "moment";
import { useHistory } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import Pagenavigation from "../../../../components/Pagination";

import {
	Box,
	Button,
	Card,
	CardHeader,
	Chip,
	Divider,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
	Tooltip,
	makeStyles,
	IconButton,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles(() => ({
	root: {},
	actions: {
		justifyContent: "flex-end",
	},
}));

const LatestOrders = ({ listOrder, ...rest }) => {
	const [orderPagination, setOrderPagination] = useState([]);
	const history = useHistory();

	const handleEdit = (value) => {
		const editUrl = `/admin/order/edit/${value}`;
		history.push(editUrl);
		return;
	};

	const classes = useStyles();
	useEffect(() => {
		if (listOrder) {
			console.log(listOrder);
			handlePagination(1);
		}
	}, [listOrder.length]);
	const handlePagination = (page) => {
		const limit = 8;
		let endPage = Math.ceil(listOrder.length / 8);
		console.log(page, endPage);
		let from = (page - 1) * limit;
		let toindex = page * limit;
		if (page == endPage) {
			let orderPagination = listOrder.slice(from, listOrder.length);
			setOrderPagination(orderPagination);
			return orderPagination;
		}
		let orderPagination = listOrder.slice(from, toindex);
		setOrderPagination(orderPagination);
		return orderPagination;
	};

	return (
		<Card className={clsx(classes.root)} {...rest}>
			<CardHeader title="List Orders" />
			<Divider />
			<PerfectScrollbar>
				<Box minWidth={800}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Code</TableCell>
								<TableCell>Khách hàng</TableCell>
								<TableCell>Địa Chỉ</TableCell>
								<TableCell>Tổng Tiền</TableCell>
								<TableCell sortDirection="desc">
									<Tooltip enterDelay={300} title="Sort">
										<TableSortLabel active direction="desc">
											Thời Gian
										</TableSortLabel>
									</Tooltip>
								</TableCell>
								<TableCell>Trạng Thái</TableCell>
								<TableCell>Thao Tác</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orderPagination.map((order) => (
								<TableRow hover key={order._id}>
									<TableCell>
										{order._id.slice(20).toUpperCase()}
									</TableCell>
									<TableCell>{order.user.username}</TableCell>
									<TableCell>{order.address}</TableCell>
									<TableCell>{order.totalrice}</TableCell>
									<TableCell>
										{moment(order.createdAt).format("DD/MM/YYYY")}
									</TableCell>
									<TableCell>
										{order.status == 0 ? (
											<Chip
												color="secondary"
												label={"xác nhận"}
												size="small"
											/>
										) : order.status == 1 ? (
											<Chip
												color="primary"
												label={"đang giao hàng"}
												size="small"
											/>
										) : order.status == 3 ? (
											<Chip color="" label={"đã hủy"} size="small" />
										) : (
											<Chip
												style={{ backgroundColor: "#4ac272" }}
												label={"Hoàn Thành"}
												size="small"
											/>
										)}
									</TableCell>
									<TableCell>
										<IconButton onClick={() => handleEdit(order._id)}>
											<Edit style={{ color: "#222" }}></Edit>
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Box>
			</PerfectScrollbar>
			<Pagenavigation
				count={Math.ceil(listOrder.length / 8)}
				Pagination={handlePagination}
			></Pagenavigation>
		</Card>
	);
};

LatestOrders.propTypes = {
	listOrder: PropTypes.array,
};

export default LatestOrders;
