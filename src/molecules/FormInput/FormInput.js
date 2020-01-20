import PropTypes from 'prop-types'
import React from 'react'
import Input from '../../atoms/Input/Input'
import './FormInput.scss'

export const FormInput = ({ error, touched, ...rest }) => (
  <div className="form-input-wrapper">
    <Input hasError={touched && !!error} {...rest} />
    {touched && !!error && <div className="form-input-error">{error}</div>}
  </div>
)

FormInput.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool
}

FormInput.defaultProps = {
  error: null,
  touched: false
}
export default FormInput
