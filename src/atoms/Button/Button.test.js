import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import Button from './Button'

describe('<Button/>', () => {
  test('renders without crashing', () => {
    render(<Button title="test" onClick={(k) => k} />)
  })
  test('calls the onClick function passed as props when the button is clicked', () => {
    const onClickMock = jest.fn()
    const title = 'test button'
    const { getByText } = render(<Button title={title} onClick={onClickMock} />)
    fireEvent.click(getByText(title))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
  test('renders by default a btn-flat button', () => {
    const title = 'test button'
    const { getByText } = render(<Button title={title} onClick={(k) => k} />)
    expect(getByText(title)).toHaveClass('btn btn-flat default')
  })
  test('add primary, contained and disabled classNames if passed as props', () => {
    const title = 'test button'
    const { getByText } = render(
      <Button disabled color="primary" title={title} variant="contained" onClick={(k) => k} />
    )
    expect(getByText(title)).toHaveClass('btn btn-contained primary btn-disabled')
  })
})
