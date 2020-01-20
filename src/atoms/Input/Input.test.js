import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import Input from './Input'

describe('<Input />', () => {
  test('renders without crashing', () => {
    render(<Input label="test" name="test" value="test" onChange={(k) => k} />)
  })
  test('firing focus update classNames of input-root', () => {
    const { getByTestId } = render(<Input label="test" name="test" value="test" onChange={(k) => k} />)
    expect(getByTestId('input-root')).toHaveClass('input-root')
    fireEvent.focus(getByTestId('input'))
    expect(getByTestId('input-root')).toHaveClass('input-root focused')
  })
})
