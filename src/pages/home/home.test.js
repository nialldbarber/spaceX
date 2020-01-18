import React from 'react'
import { render, screen } from '@testing-library/react'
// Pages
import { Home } from 'pages/home'

test('shows message when checkbox is checked', () => {
  const testMessage = 'Test message'
  render(<Home>{testMessage}</Home>)

  expect(screen.queryByText(testMessage)).toBeNull()
})
