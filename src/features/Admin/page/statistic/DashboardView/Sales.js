import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	useTheme,
	makeStyles,
	colors,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles(() => ({
	root: {},
}));

const Sales = ({ className, totalOrderBugetByDate, ...rest }) => {
	const classes = useStyles();
	const theme = useTheme();

	const data = {
		datasets: [
			{
				backgroundColor: colors.indigo[500],
				data: [20, 30, 19, 27, 29, 19, 20],
				label: "This year",
			},
		],
		labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"],
	};
	const salesthisyear = totalOrderBugetByDate
		.sort((x, y) => (x._id.dateTime > y._id.dateTime ? 1 : -1))
		.map((item) => item.totalAmount);
	const label = totalOrderBugetByDate.map(
		(item) => `${item._id.day}-${item._id.month}`
	);
	console.log(label);
	data.datasets[0].data = [...salesthisyear];
	data.labels = [...label];
	const options = {
		animation: false,
		cornerRadius: 20,
		layout: { padding: 0 },
		legend: { display: false },
		maintainAspectRatio: false,
		responsive: true,
		scales: {
			xAxes: [
				{
					barThickness: 12,
					maxBarThickness: 10,
					barPercentage: 0.5,
					categoryPercentage: 0.5,
					ticks: {
						fontColor: theme.palette.text.secondary,
					},
					gridLines: {
						display: false,
						drawBorder: false,
					},
				},
			],
			yAxes: [
				{
					ticks: {
						fontColor: theme.palette.text.secondary,
						beginAtZero: true,
						min: 0,
					},
					gridLines: {
						borderDash: [2],
						borderDashOffset: [2],
						color: theme.palette.divider,
						drawBorder: false,
						zeroLineBorderDash: [2],
						zeroLineBorderDashOffset: [2],
						zeroLineColor: theme.palette.divider,
					},
				},
			],
		},
		tooltips: {
			backgroundColor: theme.palette.background.default,
			bodyFontColor: theme.palette.text.secondary,
			borderColor: theme.palette.divider,
			borderWidth: 1,
			enabled: true,
			footerFontColor: theme.palette.text.secondary,
			intersect: false,
			mode: "index",
			titleFontColor: theme.palette.text.primary,
		},
	};

	return (
		<Card className={clsx(classes.root, className)} {...rest}>
			<CardHeader
				action={
					<Button
						endIcon={<ArrowDropDownIcon />}
						size="small"
						variant="text"
					>
						Last days
					</Button>
				}
				title="Latest Sales"
			/>
			<Divider />
			<CardContent>
				<Box height={400} position="relative">
					<Bar data={data} options={options} />
				</Box>
			</CardContent>
			<Divider />
			<Box display="flex" justifyContent="flex-end" p={2}>
				<Button
					color="primary"
					endIcon={<ArrowRightIcon />}
					size="small"
					variant="text"
				>
					Overview
				</Button>
			</Box>
		</Card>
	);
};

Sales.propTypes = {
	className: PropTypes.string,
};

export default Sales;
