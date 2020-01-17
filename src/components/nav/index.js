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
	const { changeTheme } = useContext(WrapperContext)

	return (
		<Header>
			<Link to="/">
				<img src={logo} alt="Logo" />
			</Link>
			<Button variant="contained" onClick={changeTheme}>Change Theme</Button>
		</Header>
	)
}
