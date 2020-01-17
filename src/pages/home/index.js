import React from 'react'
import { Link } from 'react-router-dom'
// Hooks
import { useFetchApi } from 'hooks/useFetchApi'
// Services
import { SPACEX_API } from 'services/lib'
// Components
import { Loading } from 'components/loading'
// Utils
import { getUniqueValues } from 'utils/flightData'
// Styles
import { FlightList } from 'styles/flights'

export const Home = () => {
	const { data, loading } = useFetchApi(SPACEX_API)
	const flights = data.map(({ launch_year }) => launch_year)

	return (
		<div>
			<FlightList>
				{loading ? <Loading /> : (
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
