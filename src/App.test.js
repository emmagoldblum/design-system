import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders two formInput and a button', () => {
  const { getByText, getByLabelText } = render(<App />)
  const emailInput = getByLabelText('Email')
  const passwordInput = getByLabelText('Password')
  const button = getByText('Envoyer')
  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(button).toBeInTheDocument()
})
