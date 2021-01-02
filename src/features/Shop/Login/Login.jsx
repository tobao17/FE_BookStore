import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import React, { useRef, useState } from "react";
import apiUser from "../../../api/userApi";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
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

export default function SignIn() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [name, setName] = useState("");
	const [password, setPassWord] = useState("");
	const [progess, setProgess] = useState(false);
	const classes = useStyles();

	function handleName(e) {
		const name = e.target.value;
		setName(name);
	}

	function handlePass(e) {
		const pass = e.target.value;
		setPassWord(pass);
	}
	async function handleLogin() {
		console.log(name, password);
		const data = {
			username: name,
			password: password,
		};
		setProgess(true);
		await apiUser.login(data).then((res) => {
			console.log(res);
			if (res.accessToken) {
				localStorage.setItem("token", res.accessToken);
				localStorage.setItem("username", res.username);
				dispatch({
					type: "NOTICE",
					payload: {
						title: "Thông báo",
						msg: "Đăng nhập thành công",
					},
				});
				setProgess(false);
				history.push("/admin/book");
			} else {
				setProgess(false);
				NotificationManager.warning("", res.msg, 1000);
			}
		});
	}
	return (
		<Container component="main" maxWidth="xs">
			<NotificationContainer />
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>

				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="name"
					name="email"
					autoComplete="email"
					autoFocus
					value={name}
					onChange={handleName}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					label="Password"
					type="password"
					id="password"
					value={password}
					autoComplete="current-password"
					onChange={handlePass}
				/>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
					onClick={handleLogin}
				>
					Sign In
				</Button>
				<Grid container>
					<Grid item xs>
						<Link href="#" variant="body2">
							Forgot password?
						</Link>
					</Grid>
					<Grid item>
						<Link href="#" variant="body2">
							{"login by facebook"}
						</Link>
					</Grid>
				</Grid>
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
