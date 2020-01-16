import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

export const Button = ({ type, buttonVariant, disabled, onClick, title }) => <button className={`btn-${buttonVariant} ${type}`} disabled={disabled} onClick={onClick}>{title}</button>;


Button.propTypes = {
    type: PropTypes.string,
    buttonVariant: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

Button.defaultProps = {
    type: 'default',
    buttonVariant: 'flat',
    disabled: false
};

export default Button
