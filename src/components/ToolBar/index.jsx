import React, { useRef, useState } from "react";
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
import { Link } from "react-router-dom";
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

const Toolbar = ({ className, isOrder, onSubmit, ...rest }) => {
	const typingTimeout = useRef(null); // giu gia tri idtimeout sau moi lan render  //KY THUAT DEBOUNCE

	const classes = useStyles();
	const [keyword, setSearchTerm] = useState(""); //giu gia tri input
	function handleSearch(e) {
		const textSearch = e.target.value;
		setSearchTerm(textSearch);
		if (!onSubmit) return;
		if (typingTimeout.current) {
			clearTimeout(typingTimeout.current); //cho 300ms moi dc renderlai
		}
		console.log(typingTimeout.current);

		typingTimeout.current = setTimeout(() => {
			const value = {
				keyword: textSearch,
			};
			onSubmit(value);
		}, 300);
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
									value={keyword}
									onChange={handleSearch}
									placeholder="Search book,author"
									variant="outlined"
								/>
							</Box>
						</CardContent>
						{!isOrder && (
							<Box display="flex" m={1} justifyContent="flex-end">
								<Button color="primary" variant="contained">
									<Link
										to="/admin/book/add"
										style={{
											textDecoration: "none",
											color: "White",
										}}
									>
										Thêm Sách
									</Link>
								</Button>
							</Box>
						)}
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
