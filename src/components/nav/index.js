import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
// State
import { WrapperContext } from 'state/context'
// Styles
import { Header } from 'styles/nav'
// Assets
import logo from 'assets/spacex.png'

export const Nav = () => {
	const { user, changeTheme } = useContext(WrapperContext)

	console.log(user)

	return (
		<Header>
			<Link to="/">
				<img src={logo} alt="Logo" />
			</Link>
			<h1 style={{ color: 'white' }}>Hello {user}!</h1>
			<Button variant="contained" onClick={changeTheme}>Change Theme</Button>
		</Header>
	)
}
