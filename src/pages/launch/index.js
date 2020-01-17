import React from 'react'
// Hooks
import { useFetchApi } from 'hooks/useFetchApi'
// Services
import { LAUNCH_YEAR } from 'services/lib'
// Components
import { Loading } from 'components/loading'
// Styles
import { Container } from 'styles/launch'
// Utils
import { getFlightStatus } from 'utils/flightData'

export const Launch = ({ match }) => {
	const year = match.params.id
	const { data, loading } = useFetchApi(LAUNCH_YEAR + year)

	return (
		<Container>
			<h1>Launches from {year}</h1>
			{loading ? <Loading /> : (
				data.map(({ flight_number, mission_name, launch_success }) => (
					<div key={flight_number}>
						<p>
							Mission: {mission_name} - {getFlightStatus(launch_success)}
						</p>
					</div>
				)))}
		</Container>
	)
}
