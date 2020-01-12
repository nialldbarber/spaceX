import { css } from 'styled-components'

export const containerMixin = css`
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
`
