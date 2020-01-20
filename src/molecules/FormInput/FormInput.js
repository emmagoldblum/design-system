import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Input from '../../atoms/Input/Input'
import './FormInput.scss'

export const FormInput = ({ error, ...rest }) => {
  const [isTouched, setTouched] = useState(false)
  return (
    <div className="form-input-wrapper">
      <Input hasError={isTouched && !!error} onBlur={() => setTouched(true)} {...rest} />
      {isTouched && !!error && <div className="form-input-error">{error}</div>}
    </div>
  )
}

FormInput.propTypes = {
  error: PropTypes.string,
  touched: PropTypes.bool
}

FormInput.defaultProps = {
  error: null,
  touched: false
}
export default FormInput
