import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
	AppBar,
	Badge,
	Box,
	Hidden,
	IconButton,
	Toolbar,
	Popper,
	makeStyles,
	Paper,
	Fade,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import InputIcon from "@material-ui/icons/Input";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ErrorIcon from "@material-ui/icons/Error";
const ENDPOINT = "https://apirealtimeute.herokuapp.com";
let socket;

const useStyles = makeStyles(() => ({
	root: {},
	avatar: {
		width: 60,
		height: 60,
	},
	positionTableNotice: {
		top: "20px! important",
	},
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
	const listAnnounce = useSelector((state) => state.notice.msgOrderNew);
	//console.log(listAnnounce);
	const history = useHistory();
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("name");
		history.push("/sign-in");
	};

	const handleClick = (newPlacement) => (event) => {
		setAnchorEl(event.currentTarget);
		setOpen((prev) => placement !== newPlacement || !prev);
		setPlacement(newPlacement);
	};
	return (
		<AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
			<Toolbar>
				<Box flexGrow={1} />
				<Hidden mdDown>
					<IconButton color="inherit" onClick={handleClick("bottom")}>
						<Badge badgeContent={listAnnounce.length} color="secondary">
							<NotificationsNoneIcon></NotificationsNoneIcon>
						</Badge>

						<Popper
							open={open}
							anchorEl={anchorEl}
							placement={placement}
							transition
							listAnnounce={listAnnounce}
							className={classes.positionTableNotice}
						>
							{({ TransitionProps }) => {
								// const redirectDetailOrder = (value) => {
								// 	// console.log(value);
								// 	//	console.log(`bao ruoi pro fesional`);

								// 	history.replace(`order/edit/${value}`);
								// };
								return (
									<Fade {...TransitionProps} timeout={350}>
										<Paper>
											<MenuList role="menu">
												{listAnnounce.map((item) => (
													<MenuItem
														className={classes.dropdownItem}
													>
														<Link
															className="cssnotice"
															to={`/admin/order/edit/${item.id}`}
														>
															<ErrorIcon></ErrorIcon>
															Bạn nhận được một đơn hàng từ{" "}
															<b>{item.username}</b>
														</Link>
													</MenuItem>
												))}
											</MenuList>
										</Paper>
									</Fade>
								);
							}}
						</Popper>
					</IconButton>
					<IconButton color="inherit" onClick={handleLogout}>
						<InputIcon />
					</IconButton>
				</Hidden>
				<Hidden lgUp>
					<IconButton color="inherit">
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

TopBar.propTypes = {
	className: PropTypes.string,
	onMobileNavOpen: PropTypes.func,
};

export default TopBar;
