import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
	colors,
	makeStyles,
	useTheme,
} from "@material-ui/core";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import PhoneIcon from "@material-ui/icons/Phone";
import TabletIcon from "@material-ui/icons/Tablet";

const useStyles = makeStyles(() => ({
	root: {
		height: "100%",
	},
}));

const TrafficByDevice = ({
	className,
	totalOrderByWeb,
	totalOrder,
	...rest
}) => {
	const classes = useStyles();
	const theme = useTheme();
	const orderbyWebPercent = totalOrderByWeb
		? (totalOrderByWeb / totalOrder).toFixed(2)
		: 0;
	const ccccc = (1 - orderbyWebPercent).toFixed(2);

	const data = {
		datasets: [
			{
				data: [totalOrderByWeb, totalOrder - totalOrderByWeb],
				backgroundColor: [colors.indigo[500], colors.red[600]],
				borderWidth: 8,
				borderColor: colors.common.white,
				hoverBorderColor: colors.common.white,
			},
		],
		labels: ["Web", "Mobile"],
	};

	const options = {
		animation: false,
		cutoutPercentage: 80,
		layout: { padding: 0 },
		legend: {
			display: false,
		},
		maintainAspectRatio: false,
		responsive: true,
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

	const devices = [
		{
			title: "Web",
			value: orderbyWebPercent,
			icon: LaptopMacIcon,
			color: colors.indigo[500],
		},

		{
			title: "Mobile",
			value: ccccc,
			icon: PhoneIcon,
			color: colors.red[600],
		},
	];

	return (
		<Card className={clsx(classes.root, className)} {...rest}>
			<CardHeader title="Traffic by Device" />
			<Divider />
			<CardContent>
				<Box height={300} position="relative">
					<Doughnut data={data} options={options} />
				</Box>
				<Box display="flex" justifyContent="center" mt={2}>
					{devices.map(({ color, icon: Icon, title, value }) => (
						<Box key={title} p={1} textAlign="center">
							<Icon color="action" />
							<Typography color="textPrimary" variant="body1">
								{title}
							</Typography>
							<Typography style={{ color }} variant="h2">
								{value}%
							</Typography>
						</Box>
					))}
				</Box>
			</CardContent>
		</Card>
	);
};

TrafficByDevice.propTypes = {
	className: PropTypes.string,
};

export default TrafficByDevice;
