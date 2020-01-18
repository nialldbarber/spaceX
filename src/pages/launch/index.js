import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
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
	const year = match?.params?.id
	const { data, loading } = useFetchApi(LAUNCH_YEAR + year)

	return (
		<Container>
			<h1>Launches from {year}</h1>
			<Grid className="launches" container spacing={2}>
				{loading ? <Loading /> : (
					data.map(({ flight_number, mission_name, launch_success }) => (
						<Card key={flight_number}>
							<CardContent>
								<p>
									Mission: {mission_name} - {getFlightStatus(launch_success)}
								</p>
							</CardContent>
						</Card>
					)))}
			</Grid>
		</Container>
	)
}
