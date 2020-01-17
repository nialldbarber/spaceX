import { useState, useEffect } from 'react'

export const useFetchApi = (api) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(
		() => {
			const fetchApi = async () => {
				setLoading(true)
				try {
					const response = await fetch(api).then((res) => res.json())
					setData(response)
					setLoading(false)
				} catch (error) {
					console.log(`Uh oh: ${error}`)
				}
			}

			fetchApi()
		},
		[api]
	)

	return {
		data,
		loading
	}
}
