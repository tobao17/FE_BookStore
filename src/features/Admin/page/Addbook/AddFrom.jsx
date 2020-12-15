import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Paper,
	Button,
	Typography,
	Grid,
	CssBaseline,
} from "@material-ui/core";
import PropTypes from "prop-types";

import { Formik, Form, FastField } from "formik";
import InputField from "../../../../components/InputField";
import SelectField from "../../../../components/SelectFiled";
import ImageField from "../../../../components/ImageField";
import global from "../../../../constants/global";
import { useHistory } from "react-router-dom";

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
	initialValues: PropTypes.object,
	isAddForm: PropTypes.bool,
};

Checkout.defaultProps = {
	onSubmit: null,
	initialValues: {},
	isAddForm: null,
};
export default function Checkout(props) {
	const classes = useStyles();
	const { initialValues, isAddForm } = props;
	const history = useHistory();

	function handleBack(vaule) {
		history.push("/admin");
		return;
	}
	//image

	return (
		<Formik
			initialValues={initialValues}
			enableReinitialize //lap lai khi props thay doi =>vai dan
			onSubmit={props.onSubmit}
		>
			{(formmikProps) => {
				const InitialImageUrl = formmikProps.initialValues
					? formmikProps.initialValues.images
					: null;

				//		console.log(InitialImageUrl);
				function handlelForm(value) {
					console.log(value);
					formmikProps.setFieldValue("images", value);
				}
				return (
					<Form>
						<React.Fragment>
							<CssBaseline />

							<main className={classes.layout}>
								<Paper className={classes.paper}>
									<React.Fragment>
										<Typography variant="h6" gutterBottom>
											{isAddForm ? "Thêm Sách" : "Cập Nhật Sách"}
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
												name="quantity"
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
												name="categoryId"
												label="Thể loại"
												component={SelectField}
												options={global}
												xs={12}
												xm={12}
											></FastField>

											<FastField
												name="description"
												label="Miêu tả"
												component={InputField}
												xs={12}
												xm={12}
												rows="5"
											></FastField>

											<Grid item xs={12} sm={12}>
												<ImageField
													Imageurl={InitialImageUrl}
													onchange={handlelForm}
												></ImageField>
											</Grid>
										</Grid>
									</React.Fragment>
									<div className={classes.buttons}>
										<Button
											onClick={handleBack}
											className={classes.button}
										>
											Trở về
										</Button>

										<Button
											variant="contained"
											color="primary"
											type="submit"
											className={classes.button}
										>
											{isAddForm ? "Thêm" : "Cập Nhật"}
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
