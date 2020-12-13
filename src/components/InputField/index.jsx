import PropTypes from "prop-types";
import React from "react";
import { TextField, Grid } from "@material-ui/core";
InputField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
};

InputField.defaultProps = {
	type: "text",
	label: "",
	placeholder: "",
	disabled: false,
};

function InputField(props) {
	const { field, form, type, label, placeholder, disabled, xs, xm } = props;
	const { name } = field;

	const { errors, touched } = form;
	const showError = errors[name] && touched[name];

	return (
		<Grid item xs={xs} sm={xm}>
			<TextField
				required
				id={name}
				name={name}
				{...field}
				type={type}
				fullWidth
				label={label}
				disabled={disabled}
				placeholder={placeholder}
				invalid={showError}
			/>
		</Grid>
	);
}

export default InputField;
