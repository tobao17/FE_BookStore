import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ForgotPassword from "../../../api/forgotPasswordApi";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				uteBookstore
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function ResetPassword() {
	const [value, setValue] = useState("");
	const [progess, setProgess] = useState(false);
	const handleonchange = (e) => {
		setValue(e.target.value);
		//console.log(value);
	};

	const classes = useStyles();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: value,
		};
		try {
			setProgess(true);

			await ForgotPassword.forgetPassword(data).then((res) => {
				console.log(res.msd);
				if (res.Type === "success") {
					setValue("");
					setProgess(false);
					NotificationManager.success("", res.msd, 1000);
				} else {
					setProgess(false);
					NotificationManager.warning("", res.msd, 1000);
				}
			});
		} catch (error) {}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<NotificationContainer />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Quên Mật Khẩu
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						value={value}
						fullWidth
						onChange={handleonchange}
						name="email"
						label="Email của bạn"
						type="email"
						autoComplete="current-password"
					/>
					{/* <TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Nhập lại mật khẩu"
						type="password"
						id="password"
						autoComplete="current-password"
					/> */}

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Xác Nhận
					</Button>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>

			<Backdrop className={classes.backdrop} open={progess}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Container>
	);
}
