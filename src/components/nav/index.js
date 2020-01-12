import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import { Header } from 'styles/nav'
// Assets
import logo from 'assets/spacex.png'

export const Nav = () => {
	return (
		<Header>
			<Link to="/">
				<img src={logo} alt="Logo" />
			</Link>
			<nav>
				<Link to="/">Flights</Link>
			</nav>
		</Header>
	)
}
