import { render } from '@testing-library/react'
import React from 'react'
import ButtonWithLoading from './ButtonWithLoading'

describe('<ButtonWithLoading />', () => {
  test('renders without crashing', () => {
    render(<ButtonWithLoading title="test" onClick={(k) => k} />)
  })
})
