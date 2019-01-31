import React from "react";
import propTypes from "prop-types";
import TextField from "@material-ui/core/es/TextField/TextField";

const style = {
  color: "red"
};

const customField = (props) => {
  const {
    input,
    meta: { touched, error, invalid },
    ...rest
  } = props;
  return (
    <div>
      <TextField
        margin="normal"
        fullWidth
        required
        error={touched && !!error}
        {...input}
        {...rest}
      />
      {input.name === "cvv" && (!touched || !invalid) && <p>Last three digits on signature strip</p>}
      {touched && error && <p style={style}>{error}</p>}
    </div>
  );
};

customField.propTypes = {
  input: propTypes.object.isRequired,
  touched: propTypes.bool,
  error: propTypes.string,
  invalid: propTypes.bool,
  rest: propTypes.object
};

export default customField;