import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import { useHistory } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
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
	const history = useHistory();

	const handleDelete = (value) => {
		// confirm({
		// 	title: "Thông Báo",
		// 	description: "Bạn có muốn xóa sản phẩm này?",
		// })
		// 	.then(() => {
		// 		onRemoveClick(value);
		// 	})
		// 	.catch(() => {});
		return;
	};

	const handleEdit = (value) => {
		const editUrl = `/admin/order/edit/${value}`;
		history.push(editUrl);
		return;
	};

	const classes = useStyles();

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
							{listOrder.map((order) => (
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
										) : (
											<Chip color="" label={"đã hủy"} size="small" />
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
			<Box display="flex" justifyContent="flex-end" p={2}>
				<Button
					color="primary"
					endIcon={<ArrowRightIcon />}
					size="small"
					variant="text"
				>
					View all
				</Button>
			</Box>
		</Card>
	);
};

LatestOrders.propTypes = {
	listOrder: PropTypes.array,
};

export default LatestOrders;
