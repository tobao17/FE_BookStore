import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
	Box,
	Button,
	Card,
	CardContent,
	TextField,
	InputAdornment,
	SvgIcon,
	makeStyles,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Search as SearchIcon } from "react-feather";

const useStyles = makeStyles((theme) => ({
	root: {},
	importButton: {
		marginRight: theme.spacing(1),
	},
	exportButton: {
		marginRight: theme.spacing(1),
	},
}));

const Toolbar = ({ className, onSubmit, ...rest }) => {
	const classes = useStyles();
	const [searchTerm, setSearchTerm] = useState("");
	function handleSearch(e) {
		console.log(e.target.value);
		setSearchTerm(e.target.value);

		if (!onSubmit) return;
		const value = {
			searchTerm,
		};
		onSubmit(value);
	}

	return (
		<div className={clsx(classes.root, className)} {...rest}>
			<Box mt={3} display="flex">
				<Box style={{ width: "100%" }}>
					<Card>
						<CardContent>
							<Box maxWidth={500}>
								<TextField
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<SvgIcon fontSize="small" color="action">
													<SearchIcon />
												</SvgIcon>
											</InputAdornment>
										),
									}}
									onChange={handleSearch}
									placeholder="Search book"
									variant="outlined"
								/>
							</Box>
						</CardContent>
						<Box display="flex" m={1} justifyContent="flex-end">
							<Button color="primary" variant="contained">
								<Link to="/admin/add">Add Book</Link>
							</Button>
						</Box>
					</Card>
				</Box>
			</Box>
		</div>
	);
};

Toolbar.propTypes = {
	className: PropTypes.string,
};

export default Toolbar;
