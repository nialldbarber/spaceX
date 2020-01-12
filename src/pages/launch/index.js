import React from 'react'
// Hooks
import { useFetchApi } from 'hooks/useFetchApi'
// Services
import { LAUNCH_YEAR } from 'services/lib'
// Styles
import { Container } from 'styles/launch'

export const Launch = ({ match }) => {
	const year = match.params.id
	const { data, loading } = useFetchApi(LAUNCH_YEAR + year)

	console.log(data)

	return (
		<Container>
			<h1>Launches from {year}</h1>
			{data.map(({ mission_name, launch_success }) => (
				<div>
					<p>
						Mission: {mission_name} - {launch_success ? 'SUCCESS' : 'FAILURE'}
					</p>
				</div>
			))}
		</Container>
	)
}
