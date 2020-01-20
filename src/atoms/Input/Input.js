import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import './Input.scss'

const Input = ({ disabled, hasError, icon, label, name, value, onChange, onFocus, onBlur, required, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="input-wrapper">
      <label
        className={`input-label ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''} ${
          hasError ? 'error' : ''
        } ${required ? 'required' : ''}`}
        htmlFor={name}
        id={name}
      >
        {label}
      </label>
      <div
        className={`input-root ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''} ${hasError ? 'error' : ''}`}
        data-testid="input-root"
      >
        {icon && (
          <FontAwesomeIcon
            className={`input-icon ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''} ${
              hasError ? 'error' : ''
            }`}
            icon={icon}
          />
        )}
        <input
          data-testid="input"
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
  required: PropTypes.bool,
  value: PropTypes.string.isRequired
}

Input.defaultProps = {
  disabled: false,
  hasError: false,
  onBlur: (k) => k,
  onFocus: (k) => k,
  required: false
}

export default Input
