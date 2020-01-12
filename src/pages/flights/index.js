import React from 'react'
import { Link } from 'react-router-dom'
// Hooks
import { useFetchApi } from 'hooks/useFetchApi'
// Services
import { SPACEX_API } from 'services/lib'
// Utils
import { getUniqueValues } from 'utils/flightData'
// Styles
import { FlightList } from 'styles/flights'

export const Flights = ({ message }) => {
	const { data, loading } = useFetchApi(SPACEX_API)
	const flights = data.map(({ launch_year }) => launch_year)

	console.log(flights)

	return (
		<div>
			<FlightList>
				{loading ? (
					'Loading...'
				) : (
					getUniqueValues(flights).map((year, i) => (
						<li key={i}>
							<Link to={`/launch/${year}`}>{year}</Link>
						</li>
					))
				)}
			</FlightList>
		</div>
	)
}
