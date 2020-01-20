import PropTypes from 'prop-types'
import React from 'react'
import './Input.scss'

export const Input = ({ label, name, value, onChange, ...rest }) => (
  <div className="input-wrapper">
    <label htmlFor={name} id={name}>
      {label}
    </label>
    <input id={name} name={name} value={value} onChange={onChange} {...rest} />
  </div>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Input
