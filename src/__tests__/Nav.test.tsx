import React from 'react'
import { render, screen } from '@testing-library/react'

import Nav from 'src/components/Nav'

test('renders rick text', () => {
  render(<Nav />)
  const title = screen.getByText(/Rick/i)
  expect(title).toBeInTheDocument()
})
