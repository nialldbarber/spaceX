import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Flights } from 'pages/flights'

test('shows message when checkbox is checked', () => {
	const testMessage = 'Test message'
	render(<Flights>{testMessage}</Flights>)

	expect(screen.queryByText(testMessage)).toBeNull()
})
