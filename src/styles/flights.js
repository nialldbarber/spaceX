import styled from 'styled-components'
// Utils
import { containerMixin } from 'styles/utils/mixins'

export const FlightList = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 200px;
	grid-gap: 10px;
	${containerMixin};

	li {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
		transition: .2s ease;
		transform: none;

		&:hover {
			transform: translateY(-3px);
		}

		a {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			font-size: 2rem;
			color: ${(props) => props.theme.black};
		}
	}
`
