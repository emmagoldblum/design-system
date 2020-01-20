import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import './Input.scss'

export const Input = ({ disabled, hasError, icon, label, name, value, onChange, onFocus, onBlur, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="input-wrapper">
      <label
        className={`input-label ${isFocused && 'focused'} ${disabled && 'disabled'} ${hasError && 'error'}`}
        htmlFor={name}
        id={name}
      >
        {label}
      </label>
      <div className={`input-root ${isFocused && 'focused'} ${disabled && 'disabled'} ${hasError && 'error'}`}>
        {icon && (
          <FontAwesomeIcon
            className={`input-icon ${isFocused && 'focused'} ${disabled && 'disabled'} ${hasError && 'error'}`}
            icon={icon}
          />
        )}
        <input
          disabled={disabled}
          id={name}
          name={name}
          value={value}
          onBlur={(e) => {
            setIsFocused(false)
            return onBlur(e)
          }}
          onChange={onChange}
          onFocus={(e) => {
            setIsFocused(true)
            return onFocus(e)
          }}
          {...rest}
        />
      </div>
    </div>
  )
}

Input.propTypes = {
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  icon: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  value: PropTypes.string.isRequired
}

Input.defaultProps = {
  disabled: false,
  hasError: false,
  onBlur: (k) => k,
  onFocus: (k) => k
}

export default Input
