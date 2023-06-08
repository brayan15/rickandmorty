import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '../pages/Home'

test('renders rick text', () => {
  render(<Home />)
  const title = screen.getByText(/rick/i)
  expect(title).toBeInTheDocument()
})
