import PropTypes from 'prop-types'
import React from 'react'
import './Button.scss'

export const Button = ({ color, variant, disabled, onClick, title, ...rest }) => (
  <button
    className={`btn btn-${variant} ${color} ${disabled ? 'btn-disabled' : ''}`}
    disabled={disabled}
    onClick={onClick}
    {...rest}
  >
    {title}
  </button>
)

Button.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string
}

Button.defaultProps = {
  color: 'default',
  disabled: false,
  variant: 'flat'
}

export default Button
