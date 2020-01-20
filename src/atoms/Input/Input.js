import PropTypes from 'prop-types'
import React, { useState } from 'react'
import './Input.scss'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Input = ({ label, name, value, onChange, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div className="input-wrapper">
      <label htmlFor={name} id={name}>
        {label}
      </label>
      <div className={`input-root ${isFocused && 'focused'}`}>
        <FontAwesomeIcon className="input-icon" icon={faUserCircle} />
        <input
          id={name}
          name={name}
          value={value}
          onBlur={() => setIsFocused(false)}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          {...rest}
        />
      </div>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Input
