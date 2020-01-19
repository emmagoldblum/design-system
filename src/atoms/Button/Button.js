import PropTypes from 'prop-types'
import React from 'react'
import './Button.scss'

export const Button = ({ color, buttonVariant, disabled, onClick, title }) => (
  <button className={`btn-${buttonVariant} ${color}`} disabled={disabled} onClick={onClick}>
    {title}
  </button>
)

Button.propTypes = {
  buttonVariant: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

Button.defaultProps = {
  buttonVariant: 'flat',
  color: 'default',
  disabled: false
}

export default Button
