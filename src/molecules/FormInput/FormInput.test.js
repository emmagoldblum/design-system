import { render } from '@testing-library/react'
import React from 'react'
import FormInput from './FormInput'

describe('<ButtonWithLoading />', () => {
  test('renders without crashing', () => {
    render(<FormInput label="test" name="test" value="test" onChange={(k) => k} />)
  })
})
