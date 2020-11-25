import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { Formik, Form, FastField } from "formik";
import InputField from "../../../../components/InputField";
import SelectField from "../../../../components/SelectFiled";
import ImageField from "../../../../components/ImageField";
import global from "../../../../constants/global";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
	},
	layout: {
		width: "auto",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));
Checkout.propTypes = {
	onSubmit: PropTypes.func,
};

Checkout.defaultProps = {
	onSubmit: null,
};
export default function Checkout(props) {
	const classes = useStyles();
	const initialValues = {
		title: "",
		number: "",
		author: "",
		description: "",
		image: "",
		price: "",
		category: "",
	};

	return (
		<Formik initialValues={initialValues} onSubmit={props.onSubmit}>
			{(formmikProps) => {
				const { values, errors, touched } = formmikProps;
				return (
					<Form>
						<React.Fragment>
							<CssBaseline />

							<main className={classes.layout}>
								<Paper className={classes.paper}>
									<React.Fragment>
										<Typography variant="h6" gutterBottom>
											Thêm Sách
										</Typography>
										<Grid container spacing={3}>
											<FastField
												name="title"
												label="Tên sách"
												component={InputField}
												type="text"
												xs={12}
												xm={6}
											></FastField>
											<FastField
												name="number"
												label="Số lượng"
												component={InputField}
												type="Number"
												xs={12}
												xm={6}
											></FastField>
											<FastField
												name="author"
												label="Tác Giả"
												component={InputField}
												type="text"
												xs={12}
												xm={6}
											></FastField>
											<FastField
												name="price"
												label="Giá"
												component={InputField}
												type="Number"
												xs={12}
												xm={6}
											></FastField>
											<FastField
												name="category"
												label="Thể loại"
												component={SelectField}
												options={global}
												xs={12}
												xm={6}
											></FastField>
											{/* <FastField
												name="image"
												label="Hình ảnh"
												component={ImageField}
												type="file"
												xs={12}
												xm={6}
											></FastField> */}
											<Grid item xs={12} sm={6}>
												<TextField
													name="image"
													label="Hình ảnh"
													type="file"
													onChange={(event) => {
														formmikProps.setFieldValue(
															"image",
															event.target.files[0]
														);
													}}
												/>
											</Grid>
											<FastField
												name="description"
												label="Miêu tả"
												component={InputField}
												xs={12}
												xm={12}
												rows="5"
											></FastField>
										</Grid>
									</React.Fragment>
									<div className={classes.buttons}>
										<Button className={classes.button}>Trở về</Button>

										<Button
											variant="contained"
											color="primary"
											type="submit"
											className={classes.button}
										>
											Thêm
										</Button>
									</div>
								</Paper>
							</main>
						</React.Fragment>
					</Form>
				);
			}}
		</Formik>
	);
}
