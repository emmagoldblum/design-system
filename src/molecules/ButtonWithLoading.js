import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import Button from '../atoms/Button/Button'
import './ButtonWithLoading.scss'

export const ButtonWithLoading = ({ isLoading, ...rest }) => (
  <div className="button-with-progress">
    <Button disabled={isLoading} {...rest} />
    {isLoading && <FontAwesomeIcon className="spinner" icon={faSpinner} />}
  </div>
)

ButtonWithLoading.propTypes = {
  isLoading: PropTypes.bool
}

ButtonWithLoading.defaultProps = {
  isLoading: false
}

export default ButtonWithLoading
