import PropTypes from "prop-types";
import React from "react";
import { TextField, Select, MenuItem, Grid } from "@material-ui/core";
import { ErrorMessage } from "formik";
import FormControl from "@material-ui/core/FormControl";

SelectField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	options: PropTypes.array,
};

SelectField.defaultProps = {
	label: "",
	placeholder: "",
	disabled: false,
	options: [],
};

function SelectField(props) {
	const { field, form, options, label, placeholder, disabled, xs, xm } = props;
	const { name, value } = field;
	const { errors, touched } = form;
	const showError = errors[name] && touched[name];

	const selectedOption = options.find((option) => option.value === value);

	const handleSelectedOptionChange = (selectedOption) => {
		const selectedValue = selectedOption
			? selectedOption.value
			: selectedOption;

		const changeEvent = {
			target: {
				name: name,
				value: selectedValue,
			},
		};
		field.onChange(changeEvent);
	};

	return (
		<Grid item xs={xs} sm={xm}>
			<TextField
				id={name}
				name={name}
				{...field}
				fullWidth
				label={label}
				select
			>
				{options.length > 0 &&
					options.map((item) => (
						<MenuItem value={item._id}>{item.name}</MenuItem>
					))}
			</TextField>
		</Grid>
	);
}
export default SelectField;
