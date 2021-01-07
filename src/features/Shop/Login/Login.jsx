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
import React, { useEffect, useState } from "react";
import apiUser from "../../../api/userApi";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";
import userApi from "../../../api/userApi";
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

export default function SignIn() {
	useEffect(() => {
		//	lưu data

		if (isNotice.length !== 0) {
			const { titlle, msg } = isNotice[0];
			NotificationManager.warning(msg, titlle, 1000);
			dispatch({
				type: "NOTICE",
				payload: {},
			});
			// tra ve null
		}

		// eslint-disable-next-line
		return () => {};
	}, []);
	const isNotice = useSelector((state) => state.notice.msg);
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
	const handleFacebook = (res) => {
		// facebookLoginHandle(response.userID, response.accessToken);
		const data = { userID: res.userID, token: res.accessToken };

		setProgess(true);
		try {
			apiUser.loginfb(data).then((res) => {
				if (res.accessToken) {
					localStorage.setItem("token", res.accessToken);
					dispatch({
						type: "NOTICE",
						payload: {
							title: "Thông báo",
							msg: "Đăng nhập thành công",
						},
					});
					setProgess(false);
					history.push("/admin/book");
				}
			});
		} catch (error) {}
	};
	const handleGoogle = async (res) => {
		const token = res.tokenId;
		setProgess(true);
		console.log("day la " + token);
		try {
			await userApi.logingg({ token }).then((res) => {
				if (res.accessToken) {
					localStorage.setItem("token", res.accessToken);
					dispatch({
						type: "NOTICE",
						payload: {
							title: "Thông báo",
							msg: "Đăng nhập thành công",
						},
					});
					setProgess(false);
					history.push("/admin/book");
				}
			});
		} catch (error) {}
	};
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
					label="Name"
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
					<Grid container item>
						<Grid item xs>
							<Link href="/forgotpassword" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<GoogleLogin
							clientId="600298462719-rip8u175f9il4si9j1r596035csuh5mb.apps.googleusercontent.com"
							onSuccess={handleGoogle}
							onFailure={handleGoogle}
							cookiePolicy={"single_host_origin"}
							render={(renderProps) => (
								<IconButton
									//className="login__google"
									type="primary"
									style={{
										display: "flex",
										alignItems: "center",
										backgroundColor: "#d73d32",
										color: "#fff",
										marginRight: "5px",
									}}
									danger
									size={"large"}
									onClick={renderProps.onClick}
								>
									<EmailIcon></EmailIcon>
								</IconButton>
							)}
						/>

						<FacebookLogin
							appId="750523348882984"
							autoLoad={false}
							fields="name,email"
							callback={handleFacebook}
							render={(renderProps) => (
								<IconButton
									type="primary"
									style={{
										display: "flex",
										alignItems: "center",
										backgroundColor: "#0a426e",
										color: "#fff",
									}}
									size={"large"}
									onClick={renderProps.onClick}
								>
									<FacebookIcon></FacebookIcon>
								</IconButton>
							)}
						/>
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
