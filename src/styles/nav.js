import styled from 'styled-components'

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	background: ${(props) => props.theme.black};

	img {
		padding: 1rem 0 1rem .5rem;
	}
`
