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
import { Print, Delete } from "@material-ui/icons";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles(() => ({
	root: {},
	actions: {
		justifyContent: "flex-end",
	},
}));

const Listbills = ({ listbill, ...rest }) => {
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
		const editUrl = `/admin/bill/detail/${value}`;
		history.push(editUrl);
		return;
	};

	const classes = useStyles();

	return (
		<Card className={clsx(classes.root)} {...rest}>
			<CardHeader title="List Bill" />
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
								<TableCell>Thao Tác</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{listbill.map((bill) => (
								<TableRow hover key={bill._id}>
									<TableCell>
										{bill._id.slice(20).toUpperCase()}
									</TableCell>
									<TableCell>{bill.userName}</TableCell>
									<TableCell>{bill.Order.address}</TableCell>
									<TableCell>{bill.Order.totalrice}</TableCell>
									<TableCell>
										{moment(bill.updatedAt).format("DD/MM/YYYY")}
									</TableCell>

									<TableCell>
										<IconButton onClick={() => handleEdit(bill._id)}>
											<Print style={{ color: "#222" }}></Print>
										</IconButton>
										<IconButton onClick={() => handleEdit(bill._id)}>
											<Delete style={{ color: "red" }}></Delete>
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

Listbills.propTypes = {
	listbill: PropTypes.array,
};

Listbills.defaultProps = {
	listbill: [],
};

export default Listbills;
