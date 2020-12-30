import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
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
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

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
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();

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
						<Badge
							//	badgeContent={notifications.length}
							color="primary"
							variant="dot"
						>
							<NotificationsIcon />
						</Badge>

						<Popper
							open={open}
							anchorEl={anchorEl}
							placement={placement}
							transition
							className={classes.positionTableNotice}
						>
							{({ TransitionProps }) => (
								<Fade {...TransitionProps} timeout={350}>
									<Paper>
										<MenuList role="menu">
											<MenuItem className={classes.dropdownItem}>
												Mike John responded to your email
											</MenuItem>
											<MenuItem className={classes.dropdownItem}>
												You have 5 new tasks
											</MenuItem>
											<MenuItem className={classes.dropdownItem}>
												You{"'"}re now friend with Andrew
											</MenuItem>
											<MenuItem className={classes.dropdownItem}>
												Another Notification
											</MenuItem>
											<MenuItem className={classes.dropdownItem}>
												Another One
											</MenuItem>
										</MenuList>
									</Paper>
								</Fade>
							)}
						</Popper>
					</IconButton>
					<IconButton color="inherit">
						<InputIcon />
					</IconButton>
				</Hidden>
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onMobileNavOpen}>
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
