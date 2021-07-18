import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(3),
		},
	},
}));
function Pagenavigation(props) {
	const classes = useStyles();
	console.log(props.count);
	const [page, setPage] = React.useState(1);
	const handleChange = (event, value) => {
		setPage(value);
		if (Pagination) {
			props.Pagination(value);
		}
	};
	return (
		<div className={classes.root}>
			<Pagination
				count={props.count}
				page={page}
				onChange={handleChange}
				variant="outlined"
			/>
		</div>
	);
}

export default Pagenavigation;
